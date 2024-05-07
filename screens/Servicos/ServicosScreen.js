// React Package
import { View, ScrollView, StyleSheet } from 'react-native';

// Custom Components
import CardButton from '../../components/Button/CardButton';

// Main Component
export default function ServicosScreen(props) {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <CardButton icon="speedometer" label="Teste de Velocidade" goTo="Teste de Velocidade" {...props}/>
        <CardButton icon="map-marker-outline" label="Meu Ip" goTo="Meu Ip" {...props}/>
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'center',

    gap: 20,
    padding: 20,
  },
});