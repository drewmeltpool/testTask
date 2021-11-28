import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'src/view/common/Icon';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Link to="/" className="link logo__link">
        <Icon icon="Logo" className="logo__icon" />
        <h1 className="logo__text">PlantIn</h1>
      </Link>
    </div>
  );
};

export default Logo;
