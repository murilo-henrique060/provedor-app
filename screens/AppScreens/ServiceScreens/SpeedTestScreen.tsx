import { useRef, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

import internetSpeedTestHtml from "@utils/InternetSpeedTest";

import Body from "@components/Templates/Body";
import Button from "@components/Buttons/Button";
import Speedometer from "@components/Widgets/Speedometer";
import Chart from "@components/Widgets/Chart";

import ThemeContext from "@contexts/ThemeContext";

export default function SpeedTestScreen() {
  const { theme } = useContext(ThemeContext);
  const speedometerRef = useRef(null);
  const chartRef = useRef(null);
  const [speed, setSpeed] = useState(0);

  const [isConnected, setIsConnected] = useState(true);

  const webViewRef = useRef(null);

  const colors = StyleSheet.create({
    velocityLabel: {
      color: theme.textBody,
    },
  });

  const handleMessage = (event) => {
    const [code, data] = event.nativeEvent.data.split("::");

    switch (code) {
      case "0":
        console.log(data);
      break;
      case "1":
        const downloadSpeed = parseFloat(data);
        speedometerRef.current.updateSpeed(downloadSpeed);
        chartRef.current.addSpeed(downloadSpeed);
        setSpeed(downloadSpeed);
      break;
      case "2":
        switch (data) {
          case "0":
            speedometerRef.current.reset();
            console.log("Test Finished");
          break;
          case "1":
            console.error("No Internet Connection");
            setIsConnected(false);
          break;
        }
      break;
      case "3":
        console.error(data);
      break;
    }
  }

  const startTest = () => {
    return new Promise<void>((resolve, reject) => {
      chartRef.current.reset();
      speedometerRef.current.reset();
      webViewRef.current.injectJavaScript("startDlTest()");
      
      setTimeout(() => {
        webViewRef.current?.injectJavaScript("stopDlTest()");        
        resolve();
      }, 20_000);
      
    });
  }

  return (
    <Body style={styles.container}>
      {
        isConnected ? 
        <Text style={colors.velocityLabel}>Sem conexão com a internet</Text> :
        <>
          <WebView
            ref={ref => webViewRef.current = ref}
            originWhitelist={["*"]}
            cacheEnabled={false}
            cacheMode="LOAD_NO_CACHE"
            source={{ html: internetSpeedTestHtml }}
            onMessage={handleMessage}
          />
          <Speedometer speedometerRef={speedometerRef} />
          <Text style={[styles.velocityLabel, colors.velocityLabel]}>{speed} Mbps</Text>
          <Chart chartRef={chartRef} />
          <Button icon="play" label="Iníciar Teste" onPress={startTest} />
        </>
      }
    </Body>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",

    gap: 20,
  },
  velocityLabel: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  }
});