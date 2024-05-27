import { View, StyleSheet } from "react-native";

import Body from "@components/Templates/Body";
import NavigationButton from "@components/Buttons/NavigationButton";

export default function HomeScreen() {
  return (
    <Body style={styles.container}>
      <NavigationButton icon="speedometer" label="Teste de Velocidade" goTo="Speed Test" />
      <NavigationButton icon="map-marker-outline" label="Meu IP" goTo="My IP" />
    </Body>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",

    rowGap: 20,
  },
});