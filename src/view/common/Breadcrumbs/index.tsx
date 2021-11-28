import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { breadCrumpsParse, capitalize } from 'src/utils';
import FlatList from '../FlatList';
import Icon from '../Icon';

const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <FlatList
      className="breadcrumbs"
      data={breadCrumpsParse(pathname)}
      itemProps={{
        tag: React.Fragment,
      }}
      component={({ path, name }) => (
        <Link className="link breadcrumbs__item" to={path}>
          {capitalize(name)}
          <Icon icon="LeftArrow" className="breadcrumbs__icon" />
        </Link>
      )}
    />
  );
};

export default Breadcrumbs;
