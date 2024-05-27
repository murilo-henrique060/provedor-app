import { useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, cancelAnimation, withTiming, Easing } from 'react-native-reanimated';

import SpeedometerMethods from '@utils/Speedometer';

import ThemeContext from '@contexts/ThemeContext';

export default function Speedometer({ speedometerRef }) {
  const { theme } = useContext(ThemeContext);
  const degrees = useSharedValue(0);

  const colors = StyleSheet.create({
    outerCircle: {
      backgroundColor: theme.primary + "80",
    },
    innerCircle: {
      backgroundColor: theme.body,
    },
    arc: {
      backgroundColor: theme.primary,
    }
  });

  const arcAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${degrees.value}deg` },
      ],
    }
  });

  const neddleAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${degrees.value - 90}deg` },
      ],
    }
  });

  const updateSpeed = (speed) => {
    const value = SpeedometerMethods.getDegrees(speed)
    degrees.value = withSpring(value);
  }

  const reset = () => {
    cancelAnimation(degrees);
    degrees.value = withTiming(0, { duration: 500, easing: Easing.ease});
  }

  speedometerRef.current = {
    updateSpeed,
    reset,
  }

  return (
    <View style={styles.container}>
      <View style={[styles.outerCircle, colors.outerCircle]}>
        {
        // labels
        }
        <View style={[styles.innerCircle, colors.innerCircle]} />
        <View style={styles.arcContainer}>
          <Animated.View style={[styles.arcWrapper, arcAnimatedStyle]}>
            <View style={[styles.arc, colors.arc]}/>
          </Animated.View>
        </View>
        <Animated.View style={[styles.imageContainer, neddleAnimatedStyle]}>
          <Image style={styles.image} source={require("@assets/widget/neddle.webp")} />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  outerCircle: {
    justifyContent: "flex-end",
    alignItems: "center",

    width: "100%",
    height: undefined,
    aspectRatio: 2,
    marginBottom: 30,

    zIndex: 0,
    
    borderTopLeftRadius: 2000,
    borderTopRightRadius: 2000,

    borderColor: "white",
  },
  innerCircle: {
    justifyContent: "flex-end",
    alignItems: "center",

    width: "80%",
    height: undefined,
    aspectRatio: 2,

    zIndex: 10,

    overflow: "hidden",
    
    borderTopLeftRadius: 2000,
    borderTopRightRadius: 2000,
  },
  arcContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 5,

    width: "100%",
    height: undefined,
    aspectRatio: 2,

    overflow: "hidden",
  },
  arcWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",

    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  arc: {
    width: "100%",
    height: undefined,
    aspectRatio: 2,

    borderBottomLeftRadius: 2000,
    borderBottomRightRadius: 2000,
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 15,

    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    
    resizeMode: "stretch",
  },
});