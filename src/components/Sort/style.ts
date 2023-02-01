import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 26px;
`;

export const SortTitle = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: ${color.tableHeaderText};
`;

export const SortValueWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const SortIconWrapper = styled.div`
  color: ${color.textDarkGay};
`;

export const SortText = styled(SortTitle)<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? color.textDarkGay : color.textActive)};
  cursor: pointer;
`;
