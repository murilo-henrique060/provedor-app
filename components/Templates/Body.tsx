import { useContext } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import ThemeContext from "@contexts/ThemeContext";

export default function Body({ style=null, children=null }) {
  const { theme } = useContext(ThemeContext);

  const colors = StyleSheet.create({
    body: {
      backgroundColor: theme.body,
    },
  });

  return (
    <ScrollView style={[ styles.body, colors.body ]}>
      <View style={[styles.container, style]}>
        {children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,

    padding: 25,
  },
  container: {
    flex: 1,
  }
});