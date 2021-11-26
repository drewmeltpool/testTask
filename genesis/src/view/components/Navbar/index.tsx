import React, { useState } from 'react';
import FlatList from 'view/common/FlatList';
import Logo from '../Logo';

import { navLinks } from './navLinks';
import { Link } from 'react-router-dom';
import Icon from 'view/common/Icon';
import Button from 'view/common/Button';
import { classNames } from 'utils';
import Modal from 'view/common/Modal';
import { Field, Form, Formik } from 'formik';

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

            <div className={classNames('menu', isMenuOpen && 'menu--open')}>
              <Button onClick={toggleMenu(false)} className="menu__close">
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
                  <Link to={to} className="link menu__link">
                    {text}
                  </Link>
                )}
              />
              <Icon icon="Account" />
            </div>
          </div>
        </div>
      </header>

      <Modal
        size="m"
        isOpen={isModalOpen}
        closeModal={toggleModal(false)}
        className="search__modal"
      >
        {({ closeModal }) => (
          <>
            <Button
              onClick={closeModal}
              text={<Icon icon="Close" />}
              className="search__modal-btn"
            />

            <Formik
              initialValues={{ search: '' }}
              onSubmit={(d) => console.log(d)}
            >
              <Form className="form__search">
                <Field
                  type="text"
                  name="search"
                  placeholder="Search plants"
                  autoComplete="off"
                  className="form__search-input"
                />
                <Icon icon="Logo" className="form__search-icon" />
              </Form>
            </Formik>
            <div className="search__result"></div>
          </>
        )}
      </Modal>
    </>
  );
};

export default Navbar;
