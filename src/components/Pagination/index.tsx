import React from 'react';

import PaginationArrowIcon from '../Icons/PaginationArrowIcon';

import { useSelector } from 'react-redux';

import { getCurrentPage } from '../../store/selectors/cardsSelector';
import { useAppDispatch } from '../../store/store';
import { setLimitOnPage } from '../../store/slices/cardsSlice';

import * as S from './style';

type Props = {
  pages: number | undefined;
  onForwardClick: () => void;
  onPrevClick: () => void;
  onPageClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Pagination = ({ pages, onForwardClick, onPrevClick, onPageClick }: Props) => {
  const dispatch = useAppDispatch();
  const currentPage = useSelector(getCurrentPage);

  const arr = [];

  if (pages) {
    for (let i = 0; i < pages; i++) {
      arr.push(i);
    }
  }

  const onChangeLimitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    if (!target.value || Number(target.value) === 0) {
      dispatch(setLimitOnPage(3));
      localStorage.setItem('limit', '3');
      return;
    }

    localStorage.setItem('limit', target.value);
    dispatch(setLimitOnPage(Number(target.value)));
  };

  return (
    <S.Container>
      <S.LimitBox>
        <S.LimitLabel htmlFor="limit">Лимит на страницу:</S.LimitLabel>
        <S.Limit type="number" name="limit" id="limit" onChange={onChangeLimitHandler} />
      </S.LimitBox>
      <S.Control onClick={onPrevClick}>
        <PaginationArrowIcon />
      </S.Control>
      {arr.map((_, i) => (
        <S.Control
          key={i + 'pagination'}
          id={String(i + 1)}
          onClick={onPageClick}
          isActive={currentPage === i + 1}
        >
          {i + 1}
        </S.Control>
      ))}
      <S.Control onClick={onForwardClick}>
        <S.ForwardArrow>
          <PaginationArrowIcon />
        </S.ForwardArrow>
      </S.Control>
    </S.Container>
  );
};

export default Pagination;
