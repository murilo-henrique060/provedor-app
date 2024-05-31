import { useContext, useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, cancelAnimation } from "react-native-reanimated";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import ThemeContext from "@contexts/ThemeContext";

export default function Button({ icon=undefined, label="label", loadingLabel="loading...", color=undefined, labelColor=undefined, style: customStyle={}, labelStyle={}, iconStyle={}, onPress=() => {} }) {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const degrees = useSharedValue(0);

  const colors = StyleSheet.create({
    container: {
      backgroundColor: color ?? theme.primary,
    },
    label: {
      color: labelColor ?? theme.textPrimary,
    },
    icon: {
      color: labelColor ?? theme.textPrimary,
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: loading ? `${degrees.value}deg` : "0deg" },
      ],
    }
  });

  const handlePress = async () => {
    if (loading) return;

    setLoading(true);
    
    degrees.value = withRepeat(withTiming(360, { duration: 800 }), -1);

    try {
      await onPress();
    } catch (error) {
      console.error(error);
    }
    
    cancelAnimation(degrees);
    degrees.value = 0;
    setLoading(false);
  }

  return (
    <TouchableOpacity style={[styles.container, colors.container, customStyle]} onPress={handlePress}>
      <Animated.View style={animatedStyle}>
        {
          icon &&
          <MaterialCommunityIcons name={loading ? "loading" : icon} style={[styles.icon, colors.icon]} />
        }
      </Animated.View>
      <Text style={[styles.label, colors.label, labelStyle]}>
        {loading ? loadingLabel : label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    padding: 10,
    gap: 8,

    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 24,
  }
});