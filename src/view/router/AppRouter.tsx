import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Common from 'view/layout/Common';
import Home from 'view/pages/Home';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Common />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
