import { useRef, useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Line, Polyline } from 'react-native-svg';

import ChartMethods from '@utils/Chart';

import ThemeContext from '@contexts/ThemeContext';

export default function Chart({ chartRef }) {
  const { theme } = useContext(ThemeContext);
  const step = useRef(0);
  const [speeds, setSpeeds] = useState([]);

  const colors = StyleSheet.create({
    container: {
      backgroundColor: theme.primary + "30",
    },
  });

  const addSpeed = (speed) => {
    setSpeeds([...speeds, ChartMethods.getSpeedY(speed)]);
    step.current = ChartMethods.getStep(speeds.length);
  }

  const reset = () => {
    setSpeeds([]);
    step.current = 0;
  }

  chartRef.current = {
    addSpeed,
    reset,
  }

  return (
    <View style={[styles.container, colors.container]}>
      <Svg width="100%" height="100%" viewBox="0 0 300 150">
        <Line x1="20" y1="15" x2="20" y2="140" stroke={theme.primary + "80"} strokeWidth="1" />
        <Line x1="10" y1="130" x2="285" y2="130" stroke={theme.primary + "80"} strokeWidth="1" />

        <Polyline 
          points={
            speeds.map((speed, index) => {
              const x = 20 + (index * step.current);
              return `${x},${speed}`;
            }).join(" ")
          }
          fill="none"
          stroke={theme.primary}
          strokeWidth="1"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: undefined,
    aspectRatio: 2,

    borderRadius: 20,
  },
});