// React Packages
import * as SecureStore from 'expo-secure-store';

class User {
  tableId = 295076;

  isLogged() {
    const assasId = SecureStore.getItem('assasId');
    return assasId != null;
  }

  async login(cpf, password) {
    if (!cpf || !password) {
      return false;     
    } 
    
    const filter = {
      filter_type: "AND",
      filters: [
        {
          field: "CPF",
          type: "equal",
          value: cpf
        },
        {
          field: "Password",
          type: "equal",
          value: password
        }
      ]
    };

    const response = await fetch(`${process.env.EXPO_PUBLIC_BASE_ROW_URI}/api/database/rows/table/${this.tableId}/?user_field_names=true&filters=${encodeURIComponent(JSON.stringify(filter))}`, {
      headers: {
        Authorization: `Token ${process.env.EXPO_PUBLIC_BASE_ROW_TOKEN}`
      }
    }).catch(console.error);
    const data = await response.json();

    if (data.count === 0) {
      return false;
    }

    await SecureStore.setItemAsync('assasId', JSON.stringify(data.results[0].AsaasId));

    return true;
  }
}

export default new User();