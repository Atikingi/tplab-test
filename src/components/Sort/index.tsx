import * as S from './style';
import { useAppDispatch } from '../../store/store';
import React, { useEffect, useState } from 'react';
import { setSort } from '../../store/slices/cardsSlice';
import SortIcon from '../Icons/SortIcon';

const Sort = () => {
  const dispatch = useAppDispatch();

  const [activeSort, setActiveSort] = useState<string>('name');
  const [sortByName, setSortByName] = useState<string>('name');
  const [sortByCategory, setSortByCategory] = useState<string>('name');
  const [sortByViews, setSortByViews] = useState<string>('views');
  const [sortByStartDate, setSortByStartDate] = useState<string>('name');
  const [sortByEndDate, setSortByEndDate] = useState<string>('name');

  const sortByNameHandler = () => {
    setSortByName((prevState) => (prevState === 'name' ? 'name-reverse' : 'name'));
  };
  const sortByCategoryHandler = () => {
    setSortByCategory((prevState) => (prevState === 'category' ? 'category-reverse' : 'category'));
  };
  const sortByViewsHandler = () => {
    setSortByViews((prevState) => (prevState === 'views' ? 'views-reverse' : 'views'));
  };
  const sortByStartDateHandler = () => {
    setSortByStartDate((prevState) => (prevState === 'start' ? 'start-reverse' : 'start'));
  };
  const sortByEndDateHandler = () => {
    setSortByEndDate((prevState) => (prevState === 'end' ? 'end-reverse' : 'end'));
  };

  useEffect(() => {
    dispatch(setSort(sortByName));
    setActiveSort(sortByName);
  }, [sortByName]);

  useEffect(() => {
    dispatch(setSort(sortByCategory));
    setActiveSort(sortByCategory);
  }, [sortByCategory]);

  useEffect(() => {
    dispatch(setSort(sortByViews));
    setActiveSort(sortByViews);
  }, [sortByViews]);

  useEffect(() => {
    dispatch(setSort(sortByStartDate));
    setActiveSort(sortByStartDate);
  }, [sortByStartDate]);

  useEffect(() => {
    dispatch(setSort(sortByEndDate));
    setActiveSort(sortByEndDate);
  }, [sortByEndDate]);

  return (
    <S.Container>
      <S.SortTitle>Сортировать:</S.SortTitle>
      <S.SortValueWrapper>
        <S.SortText
          onClick={sortByNameHandler}
          isActive={activeSort === 'name-reverse' || activeSort === 'name'}
        >
          по названию
        </S.SortText>
        {activeSort === 'name-reverse' || activeSort === 'name' ? (
          <S.SortIconWrapper>
            <SortIcon />
          </S.SortIconWrapper>
        ) : (
          ''
        )}
      </S.SortValueWrapper>
      <S.SortValueWrapper>
        <S.SortText
          onClick={sortByViewsHandler}
          isActive={activeSort === 'views-reverse' || activeSort === 'views'}
        >
          по просмотрам
        </S.SortText>
        {activeSort === 'views-reverse' || activeSort === 'views' ? (
          <S.SortIconWrapper>
            <SortIcon />
          </S.SortIconWrapper>
        ) : (
          ''
        )}
      </S.SortValueWrapper>
      <S.SortValueWrapper>
        <S.SortText
          onClick={sortByStartDateHandler}
          isActive={activeSort === 'start-reverse' || activeSort === 'start'}
        >
          по дате начала
        </S.SortText>
        {activeSort === 'start-reverse' || activeSort === 'start' ? (
          <S.SortIconWrapper>
            <SortIcon />
          </S.SortIconWrapper>
        ) : (
          ''
        )}
      </S.SortValueWrapper>
      <S.SortValueWrapper>
        <S.SortText
          onClick={sortByEndDateHandler}
          isActive={activeSort === 'end-reverse' || activeSort === 'end'}
        >
          по дате окончания
        </S.SortText>
        {activeSort === 'end-reverse' || activeSort === 'end' ? (
          <S.SortIconWrapper>
            <SortIcon />
          </S.SortIconWrapper>
        ) : (
          ''
        )}
      </S.SortValueWrapper>
      <S.SortValueWrapper>
        <S.SortText
          onClick={sortByCategoryHandler}
          isActive={activeSort === 'category-reverse' || activeSort === 'category'}
        >
          по категории
        </S.SortText>
        {activeSort === 'category-reverse' || activeSort === 'category' ? (
          <S.SortIconWrapper>
            <SortIcon />
          </S.SortIconWrapper>
        ) : (
          ''
        )}
      </S.SortValueWrapper>
    </S.Container>
  );
};

export default Sort;
