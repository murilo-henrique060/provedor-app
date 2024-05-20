// React Packages
import * as Linking from 'expo-linking';

class AssasController {
  async getUser(cpf) {
    if (!cpf) {
      return false;
    }

    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_ASAAS_URL}/customers?&limit=1`, {
        headers: {
          'Content-Type': 'application/json',
          access_token: process.env.EXPO_PUBLIC_ASAAS_TOKEN
        }
      });
      const data = await response.json()
  
      return data.data[0];
    } catch (e) {
      console.error('Error on assas fetch', e);
      return false;
    }
  }

  async getBills(user, status) {
    if (!user) {
      return false;
    }

    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_ASAAS_URL}/payments?customer=${user.id}&status=${status}`, {
        headers: {
          'Content-Type': 'application/json',
          access_token: process.env.EXPO_PUBLIC_ASAAS_TOKEN
        }
      });
      const data = await response.json()

      return data.data;
    } catch (e) {
      console.error('Error on assas fetch', e);
      return false;
    }
  }

  async downloadBill(bill) {
    const bankSlipUrl = bill.bankSlipUrl;

    if (!bankSlipUrl) {
      return false;
    }

    try{
      await Linking.openURL(bankSlipUrl);
    } catch (e) {
      console.error('Error on download bill', e);
      return false;
    }
  }
}

export default new AssasController();