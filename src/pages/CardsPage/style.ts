import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Container = styled.main`
  max-width: 100%;
  padding-top: 136px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${color.bgPrimary};
`;

export const Title = styled.h1`
  margin-bottom: 34px;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 23px;
  color: ${color.textDarkGay};
`;

export const FilterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
