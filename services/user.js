// React Packages
import * as SecureStore from 'expo-secure-store';

// Controllers
import BaserowController from '../controllers/BaserowController';
import AssasController from '../controllers/AssasController';

class User {
  isLogged() {
    const user = SecureStore.getItem('user');

    if (!user) return false;

    return JSON.parse(user);
  }

  async login(cpf, password) {
    const user = await BaserowController.getUser(cpf, password);

    if (!user || !user.active) return false;

    const assasUser = await AssasController.getUser(cpf);

    if (!assasUser) return false;
    
    console.log('user:', assasUser);
    await SecureStore.setItemAsync('user', JSON.stringify(assasUser));
    return assasUser;
  }

  async logout() {
    await SecureStore.deleteItemAsync('user');
  }
}

export default new User();