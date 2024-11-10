import axios from 'axios';

const apiUrl = 'http://localhost:8000/api';  

const authService = {
  register: async (name, email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/register`, {
        name,
        email,
        password,
      });

      return response.data; 
    } catch (error) {
      if (error.response) {
      
        throw new Error(error.response.data.message || 'Ocorreu um erro no servidor.');
      } else {
        throw new Error('Erro desconhecido');
      }
    }
  },

  login: async (email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, { email, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response ? error.response.data.message : 'Erro desconhecido');
    }
  }
};

export default authService;
