import React from 'react';
import { Link } from 'react-router-dom';
import FlatList from 'view/common/FlatList';
import { footerLinks } from './footerLinks';

const Footer: React.FC = () => (
  <div className="footer">
    <div className="container">
      <FlatList
        data={footerLinks}
        className="footer__list"
        tag="ul"
        itemProps={{
          tag: 'li',
          className: 'footer__item',
        }}
        component={({ to, text }) => (
          <Link className="link footer__link" to={to}>
            {text}
          </Link>
        )}
      />

      <p className="footer__text">
        ©Copyright © 2020 PlantIn. All rights reserved
      </p>
    </div>
  </div>
);

export default Footer;
