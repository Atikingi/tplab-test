import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Container = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;

export const Control = styled.div<{ isActive?: boolean }>`
  width: 32px;
  height: 32px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: ${(props) => (props.isActive ? color.textActive : color.textName)};

  background: ${color.bgPrimary};
  border: 1px solid #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 1px 1.5px rgba(0, 0, 0, 0.07),
    0 2px 5px rgba(43, 45, 80, 0.08), 0 0 0 1px rgba(43, 45, 80, 0.1);
  border-radius: 2px;

  cursor: pointer;
`;

export const ForwardArrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transform: rotate(180deg);
`;

export const LimitBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Limit = styled.input`
  width: 40px;
  height: 32px;
  margin-right: 20px;

  text-align: center;
  background: ${color.bgPrimary};
  border: 1px solid #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 1px 1.5px rgba(0, 0, 0, 0.07),
    0 2px 5px rgba(43, 45, 80, 0.08), 0 0 0 1px rgba(43, 45, 80, 0.1);
  border-radius: 2px;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const LimitLabel = styled.label`
  color: ${color.textName};
  font-size: 14px;
`;
