import ArrowIcon from '../Icons/ArrowIcon';
import StarIcon from '../Icons/StarIcon';

import * as S from './style';

type Props = {
  name: string;
  old_price: string;
  new_price: string;
  discount: string;
  stars: number;
  image_url: string;
  logo_url: string;
};

const Card = ({ name, old_price, new_price, discount, stars, image_url, logo_url }: Props) => {
  const starsArr = [];
  const noStarsArr = [];

  if (stars) {
    for (let i = 0; i < stars; i++) {
      starsArr.push(i);
    }
    for (let i = 0; i < 5 - starsArr.length; i++) {
      noStarsArr.push(i);
    }
  } else {
    for (let i = 0; i < 5; i++) {
      noStarsArr.push(i);
    }
  }

  const parseBigPrice = (price: string | number) => {
    if (isNaN(price as number)) return price;

    return parseInt(String(price));
  };

  const parseSmallPrice = (price: string | number) => {
    if (isNaN(price as number)) return (price as string).split(',')[1].substring(0, 2);

    return (Number(price) % 1).toFixed(2).slice(2);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Discount>
          {String(discount) !== '0' && discount + '%'}
          <S.ArrowWrapper>
            <ArrowIcon />
          </S.ArrowWrapper>
        </S.Discount>
        <S.Logo src={logo_url} alt="Logo" />
      </S.Header>
      <S.Content>
        <img src={image_url} width="415" height="415" alt="Фото товара" />
        <S.InfoBlock>
          <S.Title>{name || 'Нет названия'}</S.Title>
          <S.PriceBlock>
            {new_price && (
              <S.OldPriceWrapper>
                <S.OldPriceBlock>
                  <S.Line />
                  <S.OldPriceBig>{parseBigPrice(old_price)}</S.OldPriceBig>
                  <S.OldPriceSmall>{parseSmallPrice(old_price)}</S.OldPriceSmall>
                  <S.OldPriceCurrency>{old_price && '₽'}</S.OldPriceCurrency>
                </S.OldPriceBlock>
                <S.OldPriceText>Старая цена</S.OldPriceText>
              </S.OldPriceWrapper>
            )}
            <S.StarsPriceWrapper>
              {stars !== 0 ? (
                <S.StarsBlock>
                  {starsArr.map((_, i) => (
                    <S.StarIconWrapper key={discount + i + 'active'} isActive>
                      <StarIcon />
                    </S.StarIconWrapper>
                  ))}
                  {noStarsArr.map((_, i) => (
                    <S.StarIconWrapper key={discount + i + 'no_active'} isActive={false}>
                      <StarIcon />
                    </S.StarIconWrapper>
                  ))}
                </S.StarsBlock>
              ) : (
                <S.StarsBlock>
                  {noStarsArr.map((_, i) => (
                    <S.StarIconWrapper key={discount + i} isActive={false}>
                      <StarIcon />
                    </S.StarIconWrapper>
                  ))}
                </S.StarsBlock>
              )}
              <S.NewPriceWrapper>
                <S.NewPriceBlock>
                  <S.NewPriceBig>
                    {new_price ? parseBigPrice(new_price) : parseBigPrice(old_price)}
                  </S.NewPriceBig>
                  <S.NewPriceSmall>
                    {new_price ? parseSmallPrice(new_price) : parseSmallPrice(old_price)}
                  </S.NewPriceSmall>
                  <S.NewPriceCurrency>{new_price && '₽'}</S.NewPriceCurrency>
                </S.NewPriceBlock>
                <S.NewPriceText>{new_price ? 'Новая цена' : 'Цена'}</S.NewPriceText>
              </S.NewPriceWrapper>
            </S.StarsPriceWrapper>
          </S.PriceBlock>
        </S.InfoBlock>
      </S.Content>
    </S.Container>
  );
};

export default Card;
