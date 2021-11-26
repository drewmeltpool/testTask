import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { breadCrumpsParse, capitalize } from 'utils';
import FlatList from '../FlatList';

const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="container">
      <FlatList
        className="breadcrumbs"
        data={breadCrumpsParse(pathname)}
        itemProps={{
          tag: React.Fragment,
        }}
        component={({ path, name }) => (
          <Link className="link breadcrumbs__item" to={path}>
            {capitalize(name)}
          </Link>
        )}
      />
    </div>
  );
};

export default Breadcrumbs;
