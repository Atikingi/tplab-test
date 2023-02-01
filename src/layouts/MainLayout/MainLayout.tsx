import { Outlet } from 'react-router-dom';
import * as S from './style';

const MainLayout = () => {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default MainLayout;
