import { RootState } from '../store';

export const getCurrentPage = (state: RootState) => state.cards.page;
export const getLimitOnPage = (state: RootState) => state.cards.limit;
export const getFiltered = (state: RootState) => state.cards.filteredBy;
export const getSorted = (state: RootState) => state.cards.sortedBy;
