import React from 'react';
import { Outlet } from 'react-router';
import Breadcrumbs from 'src/view/common/Breadcrumbs';
import Footer from 'src/view/components/Footer';
import Navbar from 'src/view/components/Navbar';

const Common: React.FC = () => {
  return (
    <div className="page">
      <Navbar />
      <main className="main">
        <div className="container">
          <Breadcrumbs />
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Common;
