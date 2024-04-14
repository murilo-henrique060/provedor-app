import { TouchableOpacity, View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const Card = ({ icon, title, goTo, navigation }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(goTo)}>
      <Ionicons name={icon} style={styles.cardIcon} />
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const ServicosScreen = (props) => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Card icon="speedometer-outline" title="Teste de Velocidade" goTo="Teste de Velocidade" {...props}/>
        <Card icon="location-outline" title="Meu Ip" goTo="Meu Ip" {...props}/>
      </View>
    </ScrollView>
  );
};

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
  card: {
    width: width / 2 - 30,
    height: width / 2 - 30,

    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#FFA500',

    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardIcon: {
    fontSize: 50,
    color: '#FFA500',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#ffa500',
  },
});

export default ServicosScreen;