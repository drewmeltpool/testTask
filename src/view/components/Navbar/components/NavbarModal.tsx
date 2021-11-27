import React from 'react';
import { Field, Form, Formik } from 'formik';
import Button from 'view/common/Button';
import Icon from 'view/common/Icon';
import Modal from 'view/common/Modal';
import Post from 'view/components/Post';
import FlatList from 'view/common/FlatList';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavbarModal: React.FC<IProps> = ({ onClose, isOpen }) => {
  return (
    <Modal
      size="m"
      isOpen={isOpen}
      closeModal={onClose}
      className="search__modal"
    >
      {({ closeModal }) => {
        return (
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
            <FlatList
              className="search__result"
              data={[1, 2, 3, 4, 5, 6, 7, 78]}
              component={() => (
                <Post
                  variant="xs"
                  src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  date={Date.now()}
                  title="title"
                  description="sdasd asd ads asd a sas d asd asd ajsd bas dasd ajsdasd asd ajsd jasbd jasdjas dja sbd"
                />
              )}
            />
          </>
        );
      }}
    </Modal>
  );
};

export default NavbarModal;
