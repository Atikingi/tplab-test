import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '../../styles/colors';

export const Container = styled.main`
  max-width: 1200px;
  padding-top: 76px;
  padding-bottom: 125px;
  margin: 0 auto;
`;

export const Navigate = styled.nav`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 48px;
`;

export const NavigateText = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: ${color.textDarkGay};
  text-decoration: none;

  &:hover {
    color: ${color.textLightGay};
  }
`;

export const Footer = styled.footer`
  width: 100%;
  padding-top: 36px;
  padding-bottom: 36px;
  display: flex;
  justify-content: center;
  background: rgba(217, 217, 217, 0.22);
`;

export const FooterText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 23px;
  color: ${color.textPrice};
`;
