import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CardsPage from '../pages/CardsPage';
import MainLayout from '../layouts/MainLayout/MainLayout';
import CardPageLayout from '../layouts/CardPageLayout';
import Loader from '../components/Loader';
const CardPage = React.lazy(() => import('../pages/CardPage/'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="tplab-test/" element={<CardsPage />} />
      </Route>
      <Route element={<CardPageLayout />}>
        <Route
          path="tplab-test/card/:id"
          element={
            <React.Suspense fallback={<Loader />}>
              <CardPage />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
