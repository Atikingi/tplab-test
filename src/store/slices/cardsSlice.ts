import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardProps } from '../../types/types';

type Props = {
  cards: CardProps[];
  page: number;
  limit: number;
  filteredBy: string;
  sortedBy: string;
};

const prevLimit = localStorage.getItem('limit');

const initialState: Props = {
  cards: [],
  page: 1,
  limit: Number(prevLimit) || 3,
  filteredBy: '',
  sortedBy: 'name'
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    updateCards: (state, action) => {
      state.cards = [...action.payload];
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = Number(action.payload);
    },
    setLimitOnPage: (state, action: PayloadAction<number>) => {
      state.limit = Number(action.payload);
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filteredBy = action.payload.toLowerCase();
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sortedBy = action.payload.toLowerCase();
      localStorage.setItem('sort', action.payload.toLowerCase());
    }
  }
});

export const { setCurrentPage, setLimitOnPage, updateCards, setFilter, setSort } =
  cardsSlice.actions;
