import React from 'react';
import { Link } from 'react-router-dom';
import FlatList from 'src/view/common/FlatList';
import { navLinks } from '../navLinks';

const NavbarList: React.FC = () => {
  return (
    <FlatList
      className="navbar__list"
      tag="ul"
      itemProps={{
        tag: 'li',
        className: 'navbar__item',
      }}
      data={navLinks}
      component={({ to, text }) => (
        <Link to={to} className="link navbar__link">
          {text}
        </Link>
      )}
    />
  );
};

export default NavbarList;
