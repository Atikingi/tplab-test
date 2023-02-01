import React from 'react';

import SearchIcon from '../Icons/SearchIcon';

import { useAppDispatch } from '../../store/store';
import { setFilter } from '../../store/slices/cardsSlice';

import * as S from './style';

const Search = () => {
  const dispatch = useAppDispatch();

  const filterChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <S.Container>
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
      <S.SearchInput type="text" placeholder="Поиск..." onChange={filterChangeHandler} />
    </S.Container>
  );
};

export default Search;
