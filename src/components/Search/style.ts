import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Container = styled.div`
  position: relative;
  width: 320px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 36px;
  padding-left: 32px;
  padding-top: 14px;
  padding-bottom: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: ${color.textName};

  background: ${color.bgPrimary};
  border: 1px solid #d8e2ee;
  border-radius: 18px;
  outline: none;

  &::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: ${color.placeholder};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 14px;
  top: 8px;
`;
