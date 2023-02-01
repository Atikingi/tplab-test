import * as S from './style';

type Props = {
  id: string;
  image_url: string;
  name: string;
  category: string;
  views: number;
  start_date: string;
  end_date: string;
};

const TableCard = ({ id, image_url, name, category, views, start_date, end_date }: Props) => {
  return (
    <S.Container>
      <S.Cell>
        <img src={image_url} alt={name} width="60" height="40" />
      </S.Cell>
      <S.Cell id={id}>
        <S.NameBox to={`/card/${id}`}>
          <S.TextName>{name}</S.TextName>
          <S.TextCategory>{category}</S.TextCategory>
        </S.NameBox>
      </S.Cell>
      <S.Cell>
        <S.TextNumber>{views}</S.TextNumber>
      </S.Cell>
      <S.Cell>
        <S.TextNumber>{start_date}</S.TextNumber>
      </S.Cell>
      <S.Cell>
        <S.TextNumber>{end_date}</S.TextNumber>
      </S.Cell>
    </S.Container>
  );
};

export default TableCard;
