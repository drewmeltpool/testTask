import React from 'react';

import addBanner from 'src/assets/image/addBanner.svg';

import Image from 'src/view/common/Image';
import { Link } from 'react-router-dom';
import { capitalize } from 'src/utils';
import Logo from 'src/view/components/Logo';

const SearchBox: React.FC = () => {
  return (
    <div className="banner add-banner">
      <Logo />
      <h3 className="add-banner__title">
        Get unlimited access to exclusive articles
      </h3>
      <h4 className="add-banner__subtitle">
        Get rid of limits and read everything you wish
      </h4>
      <Link className="add-banner__link link" to="/home">
        {capitalize('try for free')}
      </Link>

      <Image src={addBanner} className="add-banner__image" />
    </div>
  );
};

export default SearchBox;
