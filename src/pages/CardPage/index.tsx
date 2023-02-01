import React from 'react';

import Card from '../../components/Card';
import BackArrowIcon from '../../components/Icons/BackArrowIcon';
import Loader from '../../components/Loader';

import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { ApiService } from '../../services/api.service';
import * as S from './style';

const CardPage = () => {
  const { id } = useParams();

  const { data: response, isLoading } = useQuery(`card${id}`, () => ApiService.getCards(), {
    select: ({ data }) => {
      return data?.filter(({ views, category }) => views + category === id);
    }
  });

  if (isLoading)
    return (
      <S.Container>
        <Loader />
      </S.Container>
    );

  return (
    <S.Container>
      <S.Navigate>
        <BackArrowIcon />
        <S.NavigateText to={'/tplab-test'}>Назад</S.NavigateText>
      </S.Navigate>
      {response && (
        <Card
          name={response[0].name}
          old_price={response[0].old_price}
          new_price={response[0].new_price}
          discount={response[0].discount as string}
          stars={response[0].stars}
          image_url={response[0].image_url}
          logo_url={response[0].logo_url}
        />
      )}
      <S.Footer>
        <S.FooterText>{response && response[0].disclaimer}</S.FooterText>
      </S.Footer>
    </S.Container>
  );
};

export default CardPage;
