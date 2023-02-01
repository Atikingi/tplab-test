import Cards from '../../components/Cards';
import Search from '../../components/Search';
import Sort from '../../components/Sort';

import * as S from './style';

const CardsPage = () => {
  return (
    <S.Container>
      <S.Title>Карточки контента</S.Title>
      <Sort />
      <S.FilterBlock>
        <Search />
      </S.FilterBlock>
      <Cards />
    </S.Container>
  );
};

export default CardsPage;
