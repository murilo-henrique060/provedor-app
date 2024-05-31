import { useEffect, useRef, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';

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

  const [isConnected, setIsConnected] = useState(false);

  const webViewRef = useRef(null);

  const colors = StyleSheet.create({
    velocityLabel: {
      color: theme.textBody,
    },
    title: {
      color: theme.textBody,
    },
    bodyText: {
      color: theme.textBody,
    },
  });

  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(state => {     
  //     setIsConnected(state.type === "wifi" && state.isConnected && state.isInternetReachable);
  //   });

  //   return () => {
  //     unsubscribe();
  //   }
  // })

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
        </>:
        <>
          <Text style={[styles.title, colors.title]}>Sem Internet / Sem conexão ao Wifi</Text>

          <View style={styles.bodyContainer}>
            <Text style={[styles.bodyText, colors.bodyText]}>
              {`\u2022 Verifique se o dispositivo está conectado à sua rede Wi-Fi.`}
            </Text>
            <Text style={[styles.bodyText, colors.bodyText]}>
              {`\u2022 Verifique se a conexão está ativa.`}
            </Text>
            <Text style={[styles.bodyText, colors.bodyText]}>
              {`\u2022 Retire o roteador da tomada, aguarde 1 minuto e reconecte-o à tomada.`}
            </Text>
            <Text style={[styles.bodyText, colors.bodyText]}>
              {`\u2022 Caso o problema não seja solucionado, contate o suporte.`}
            </Text>
          </View>
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bodyContainer: {
    gap: 5,
  },
  bodyText: {
    fontSize: 16,
  },
});