import axios from 'axios';
import { CardProps } from '../types/types';

export const API_URL = `https://atikingi.github.io/tplab-test/mocks/products.json`;

export const ApiService = {
  async getCards() {
    return axios.get<CardProps[] | undefined>(`${API_URL}`);
  }
};
