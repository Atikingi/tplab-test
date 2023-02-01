import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 40px 80px 77px 90px;
  background-color: ${color.bgPrimary};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 27px;
`;

export const Discount = styled.div`
  position: relative;
  width: 73px;
  height: 36px;
  padding-right: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #f73a3a;
  border-radius: 10px 2px 2px 10px;

  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  text-align: right;
  color: ${color.textWhite};
`;

export const Logo = styled.img`
  max-width: 160px;
  max-height: 100px;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  top: 0;
  right: -29px;
`;

export const Content = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 76px;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;
`;

export const Title = styled.h2`
  max-width: 510px;
  font-style: normal;
  font-weight: 600;
  font-size: 37.6651px;
  line-height: 120%;
  color: ${color.textDarkGay};
`;

export const PriceBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const OldPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Line = styled.div`
  position: absolute;
  top: 12px;
  height: 4px;
  width: 100%;
  background-color: #ff0000;
`;

export const OldPriceBlock = styled.div`
  height: 30px;
  position: relative;
  display: flex;
  align-items: stretch;
`;

export const OldPriceBig = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 17px;
  color: ${color.textLightGay};
`;

export const OldPriceSmall = styled.p`
  margin-right: 6px;
  display: flex;
  align-items: flex-start;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 17px;
  color: ${color.textLightGay};
`;

export const OldPriceCurrency = styled.p`
  height: 100%;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 17px;
  color: ${color.textLightGay};
`;

export const OldPriceText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  color: ${color.textPrice};
`;

export const NewPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const NewPriceBlock = styled.div`
  height: 50px;
  display: flex;
  align-items: stretch;
`;

export const NewPriceBig = styled.span`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 27px;
  color: ${color.textDarkGay};
`;

export const NewPriceSmall = styled.p`
  margin-right: 6px;
  display: flex;
  align-items: flex-start;
  font-style: normal;
  font-weight: 600;
  font-size: 29px;
  line-height: 27px;
  color: ${color.textDarkGay};
`;

export const NewPriceCurrency = styled.p`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 52px;
  line-height: 27px;
  color: ${color.textDarkGay};
`;

export const NewPriceText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  color: ${color.textPrice};
`;

export const StarsPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

export const StarsBlock = styled.div`
  max-width: 185px;
  display: flex;
  gap: 10px;
`;

export const StarIconWrapper = styled.div<{ isActive: boolean }>`
  width: 20px;
  color: ${(props) => (props.isActive ? color.textDarkGay : color.textWhite)};
`;
