import { View, StyleSheet } from "react-native";

import Body from "@components/Templates/Body";
import NavigationButton from "@components/Buttons/NavigationButton";

export default function HomeScreen() {
  return (
    <Body style={styles.container}>
      <NavigationButton icon="toolbox-outline" label="Serviços" goTo="Services Stack" />
      <NavigationButton icon="account-outline" label="Área do Usuário" goTo="User Area Stack" />
      <NavigationButton icon="message-text-outline" label="Suporte" goTo="Support" />
      <NavigationButton icon="cog-outline" label="Configurações" goTo="Settings" />
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