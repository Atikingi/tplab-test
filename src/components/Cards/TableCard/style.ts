import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '../../../styles/colors';

export const Container = styled.div`
  width: 100%;
  padding-top: 9px;
  padding-bottom: 9px;
  display: flex;
  justify-content: space-between;
  background: ${color.bgPrimary};
`;

export const Cell = styled.div`
  padding-bottom: 17px;
  display: flex;
  align-items: center;
  flex-basis: 20%;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  color: ${color.tableHeaderText};
  text-align: center;
  border-bottom: 1px ${color.borderColor} solid;

  &:first-child {
    flex-basis: 15%;
    text-align: center;
  }

  &:nth-child(2) {
    flex-basis: 100%;
    flex-grow: 1;
    text-align: left;
  }

  &:not(:nth-child(2)) {
    justify-content: center;
  }
`;

export const NameBox = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 7px;
  justify-content: flex-start;

  &:hover {
    text-decoration: underline black;
    cursor: pointer;
  }
`;

export const TextName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: ${color.textName};
`;

export const TextCategory = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: ${color.textCategory};
`;

export const TextNumber = styled(TextName)`
  font-size: 14px;
  line-height: 13px;
`;
