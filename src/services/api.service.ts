import axios from 'axios';
import { CardProps } from '../types/types';

// export const PORT = '3000';
export const API_URL = `https://github.com/Atikingi/tplab-test/mocks/products.json`;

export const ApiService = {
  async getCards() {
    return axios.get<CardProps[] | undefined>(`${API_URL}`);
  }
};
