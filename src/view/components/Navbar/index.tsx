import React, { useState } from 'react';

import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';
import Logo from '../Logo';

import NavbarModal from './components/NavbarModal';
import NavbarMenu from './components/NavbarMenu';
import NavbarList from './components/NavbarList';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const toggleMenu = (flag: boolean) => () => setMenuOpen(flag);
  const toggleModal = (flag: boolean) => () => setModalOpen(flag);

  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="navbar__inner">
            <Logo />
            <NavbarList />

            <div className="navbar__controls">
              <Button onClick={toggleModal(true)}>
                <Icon icon="Search" />
              </Button>
              <Button className="account">
                <Icon icon="Account" />
              </Button>
              <Button className="burger" onClick={toggleMenu(true)}>
                <Icon icon="Burger" />
              </Button>
            </div>

            <NavbarMenu isOpen={isMenuOpen} onClose={toggleMenu(false)} />
          </div>
        </div>
      </header>

      <NavbarModal isOpen={isModalOpen} onClose={toggleModal(false)} />
    </>
  );
};

export default Navbar;
