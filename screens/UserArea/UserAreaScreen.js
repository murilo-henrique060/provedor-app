// React Packages
import { useContext } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

// Custom Packages
import User from '../../services/user';

// Contexts
import CurrentUserContext from '../../contexts/CurrentUserContext';

// Custom Components
import CardButton from '../../components/Button/CardButton';

// Main Component
export default function UserAreaScreen(props) {
  const { setUser } = useContext(CurrentUserContext);

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <CardButton icon="account-outline" label="Minha Conta" goTo="Minha Conta" {...props}/>
        <CardButton icon="file-document-outline" label="Faturas" goTo="Faturas" {...props}/>
        {/* <CardButton icon="file-outline" label="Notas Fiscais" goTo="Suporte" {...props}/> */}
      </View>
    </ScrollView>
  );
}

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