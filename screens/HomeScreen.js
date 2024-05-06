// React Packages
import { View, ScrollView, StyleSheet } from 'react-native';

// Custom Components
import CardButton from '../components/Button/CardButton';

// Main Component
export default function HomeScreen(props) {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <CardButton icon="toolbox-outline" label="Serviços" goTo="Serviços Stack" {...props}/>
        <CardButton icon="file-document-outline" label="Faturas" goTo="Faturas" {...props}/>
        <CardButton icon="message-text-outline" label="Suporte" goTo="Suporte" {...props}/>
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