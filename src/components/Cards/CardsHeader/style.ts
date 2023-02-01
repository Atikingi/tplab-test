import styled from 'styled-components';
import { color } from '../../../styles/colors';

export const Container = styled.div`
  width: 100%;
  padding-top: 9px;
  padding-bottom: 9px;
  display: flex;
  justify-content: space-between;
  background: ${color.bgHeaderTable};
`;

export const HeaderText = styled.p`
  flex-basis: 20%;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  color: ${color.tableHeaderText};
  text-align: center;

  &:first-child {
    flex-basis: 15%;
    text-align: center;
  }

  &:nth-child(2) {
    flex-basis: 100%;
    flex-grow: 1;
    text-align: left;
  }
`;
