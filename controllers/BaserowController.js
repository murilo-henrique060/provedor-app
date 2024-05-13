class BaserowController {
  async getUser(cpf, password) {
    if (!cpf || !password) {
      return false;     
    } 
    
    const filter = {
      filter_type: "AND",
      filters: [
        {
          field: "cpf",
          type: "equal",
          value: cpf
        },
        {
          field: "password",
          type: "equal",
          value: password
        }
      ]
    };

    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_BASE_ROW_URL}/api/database/rows/table/${process.env.EXPO_PUBLIC_BASE_ROW_TABLE_ID}/?user_field_names=true&filters=${encodeURIComponent(JSON.stringify(filter))}`, {
        headers: {
          Authorization: `Token ${process.env.EXPO_PUBLIC_BASE_ROW_TOKEN}`
        }
      });
      const data = await response.json();

      if (data.count === 0) {
        return false;
      }
      return data.results[0];

    } catch (error) {
      console.error('Error on login fetch', error);
      return false;
    }
  }
}

export default new BaserowController();