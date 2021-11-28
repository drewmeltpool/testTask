import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Common from 'src/view/layout/Common';
import Home from 'src/view/pages/Home';
import Search from 'src/view/pages/Search';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Common />}>
        <Route path="" element={<Home />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
