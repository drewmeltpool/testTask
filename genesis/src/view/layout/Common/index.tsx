import React from 'react';
import { Outlet } from 'react-router';
import Breadcrumbs from 'view/common/Breadcrumbs';
import Footer from 'view/components/Footer';
import Navbar from 'view/components/Navbar';

const Common: React.FC = () => {
  return (
    <div className="page">
      <Navbar />
      <main className="main">
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Common;
