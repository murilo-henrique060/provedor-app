import { useRef, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

import internetSpeedTestHtml from "@utils/InternetSpeedTest";

import Body from "@components/Templates/Body";
import Button from "@components/Buttons/Button";
import Speedometer from "@components/Widgets/Speedometer";
import Chart from "@components/Widgets/Chart";

import ThemeContext from "@contexts/ThemeContext";

// const internetSpeedTest = new InternetSpeedTest();

export default function SpeedTestScreen() {
  const { theme } = useContext(ThemeContext);
  const speedometerRef = useRef(null);
  const chartRef = useRef(null);
  const [speed, setSpeed] = useState(0);

  const colors = StyleSheet.create({
    velocityLabel: {
      color: theme.textBody,
    },
  });

  // const startTest = async () => {
  //   // internetSpeedTest.reset();
  //   // chartRef.current.reset();

  //   for (let i = 0; i < 1; i++) {
  //     try {
  //       // const internetSpeed = await internetSpeedTest.testDownloadSpeed();
  //       // const avgSpeed = internetSpeedTest.getAverageDownloadSpeedMbps();

  //       speedometerRef.current.updateSpeed(internetSpeed);
  //       setSpeed(internetSpeed);
  //       chartRef.current.addSpeed(internetSpeed);
  //     } catch (error) {
  //       console.error(error);
  //       return;
  //     }

  //   }

    // speedometerRef.current.reset();
  // }

  return (
    <WebView 
      style={{flex: 1, backgroundColor: "gray"}}
      originWhitelist={["*"]}
      cacheEnabled={false}
      source={{ html: internetSpeedTestHtml }}
    />
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