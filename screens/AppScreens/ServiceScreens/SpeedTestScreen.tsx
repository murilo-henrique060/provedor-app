import { useRef, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import InternetSpeedTest from "@utils/InternetSpeedTest";

import Body from "@components/Templates/Body";
import Button from "@components/Buttons/Button";
import Speedometer from "@components/Widgets/Speedometer";
import Chart from "@components/Widgets/Chart";

import ThemeContext from "@contexts/ThemeContext";

const internetSpeedTest = new InternetSpeedTest();

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

  const startTest = async () => {
    internetSpeedTest.reset();
    chartRef.current.reset();

    for (let i = 0; i < 5; i++) {
      try {
        const internetSpeed = await internetSpeedTest.testDownloadSpeed();
        const avgSpeed = internetSpeedTest.getAverageDownloadSpeedMbps();

        speedometerRef.current.updateSpeed(internetSpeed);
        setSpeed(avgSpeed);
        chartRef.current.addSpeed(internetSpeed);
      } catch (error) {
        console.error(error);
        return;
      }

    }

    speedometerRef.current.reset();
  }

  return (
    <Body style={styles.container}>
      <View>
        <Speedometer speedometerRef={speedometerRef}/>
        <Text style={[styles.velocityLabel, colors.velocityLabel]}>{speed} Mbps</Text>
      </View>
      <Chart chartRef={chartRef} />
      <Button icon="play" label="Iniciar Teste" loadingLabel="Testando Conexão..." onPress={startTest} />
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