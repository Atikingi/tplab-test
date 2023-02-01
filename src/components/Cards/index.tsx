import CardsHeader from './CardsHeader';
import Pagination from '../Pagination';
import TableCard from './TableCard';
import Loader from '../Loader';

import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../store/store';
import { setCurrentPage } from '../../store/slices/cardsSlice';
import { getFiltered, getLimitOnPage, getSorted } from '../../store/selectors/cardsSelector';

import { CardProps } from '../../types/types';
import { ApiService } from '../../services/api.service';
import { sorting } from '../lib/sorting';

import * as S from './style';

const Cards = () => {
  const dispatch = useAppDispatch();
  const limit = useSelector(getLimitOnPage);
  const filteredBy = useSelector(getFiltered);
  const sortedBy = useSelector(getSorted);

  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(limit);
  const [pages, setPages] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const [cards, setCards] = useState<CardProps[]>([]);

  const {
    data: response,
    isLoading,
    refetch
  } = useQuery('cards', () => ApiService.getCards(), {
    onSuccess: (response: CardProps[] | undefined) => {
      if (response) {
        setPages(Math.ceil(response.length / limit));
        setCards(response?.slice(startIndex, endIndex));
      }
    },
    select: ({ data }) => {
      return sorting(sortedBy, data);
    }
  });

  const filterCards = (start: number, end: number) => {
    const filteredCards = response?.filter(
      ({ name, category }) =>
        name.toLowerCase().includes(filteredBy) || category.toLowerCase().includes(filteredBy)
    );

    if (filteredCards) {
      setCards(filteredCards.slice(start, end));

      return filteredCards;
    }
  };

  useEffect(() => {
    filterCards(0, limit);

    if (response) {
      setPages(Math.ceil(response?.length / limit));
    }
  }, [limit]);

  useEffect(() => {
    const filteredCards = filterCards(0, endIndex);

    if (filteredCards) {
      setPages(Math.ceil(filteredCards.length / limit));
    }
  }, [filteredBy]);

  useEffect(() => {
    refetch();
  }, [sortedBy]);

  useEffect(() => {
    filterCards(startIndex, endIndex);

    dispatch(setCurrentPage(page));
  }, [page]);

  const onForwardPageHandler = () => {
    if (page === pages) {
      return;
    }

    setStartIndex((page + 1) * limit - limit);
    setEndIndex((page + 1) * limit);

    setPage((prevState) => prevState + 1);
  };

  const onPrevPageHandler = () => {
    if (page === 1) {
      return;
    }

    setStartIndex((page - 1) * limit - limit);
    setEndIndex((page - 1) * limit);

    setPage((prevState) => prevState - 1);
  };

  const onPageClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const pageNumber = Number((e.target as HTMLDivElement).id);

    if (pages) {
      if (page > 0 && page <= pages) {
        setStartIndex(pageNumber * limit - limit);
        setEndIndex(pageNumber * limit);
      }
    }

    setPage(Number((e.target as HTMLDivElement).id));
  };

  if (isLoading)
    return (
      <S.Container>
        <Loader />
      </S.Container>
    );

  return (
    <S.Container>
      <Pagination
        pages={pages}
        onForwardClick={onForwardPageHandler}
        onPrevClick={onPrevPageHandler}
        onPageClick={onPageClickHandler}
      />
      <CardsHeader />
      {response &&
        cards.map(
          ({ image_url, name, category, views, start_date, end_date, discount, stars }, i) => (
            <TableCard
              key={name + i}
              id={views + category}
              image_url={image_url}
              name={name}
              category={category}
              views={views}
              start_date={start_date}
              end_date={end_date}
            />
          )
        )}
    </S.Container>
  );
};

export default Cards;
