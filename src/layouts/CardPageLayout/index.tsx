import { Outlet } from 'react-router-dom';

import * as S from './style';

const CardPageLayout = () => {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default CardPageLayout;
