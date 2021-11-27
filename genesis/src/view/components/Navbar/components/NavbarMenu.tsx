import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'utils';
import Button from 'view/common/Button';
import FlatList from 'view/common/FlatList';
import Icon from 'view/common/Icon';
import { navLinks } from '../navLinks';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavbarMeny: React.FC<IProps> = ({ isOpen, onClose }) => {
  return (
    <div className={classNames('menu', isOpen && 'menu--open')}>
      <Button onClick={onClose} className="menu__close">
        <Icon icon="Close" />
      </Button>
      <FlatList
        className="menu__list"
        tag="ul"
        itemProps={{
          tag: 'li',
          className: 'menu__item',
        }}
        data={navLinks}
        component={({ to, text }) => (
          <Link to={to} className="link menu__link" onClick={onClose}>
            {text}
          </Link>
        )}
      />
    </div>
  );
};

export default NavbarMeny;
