import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';
import Modal from 'src/view/common/Modal';
import Post from 'src/view/components/Post';
import FlatList from 'src/view/common/FlatList';
import { capitalize, debounce } from 'src/utils';
import useFetch from 'src/hooks/useFetch';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavbarModal: React.FC<IProps> = ({ onClose, isOpen }) => {
  const [result, setResult] = useState([]);

  const { payload, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    [result]
  );

  const findPlant = (text: string) => {
    if (text) {
      setResult(payload.filter(({ title }: any) => title.includes(text)));
    } else {
      setResult([]);
    }
  };

  const searchDebounce = debounce(findPlant, 300);

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

            <Formik initialValues={{ search: '' }} onSubmit={() => undefined}>
              {({ setFieldValue }) => (
                <Form className="form__search">
                  <Field
                    name="search"
                    placeholder="Search plants"
                    autoComplete="off"
                    className="form__search-input"
                    onChange={(e: any) => {
                      setFieldValue('search', e.target.value);
                      searchDebounce(e.target.value);
                    }}
                  />
                  <Icon icon="Logo" className="form__search-icon" />
                </Form>
              )}
            </Formik>
            {loading + ''}
            <FlatList
              className="search__result"
              data={result}
              component={({ title, body }) => (
                <Post
                  variant="xs"
                  src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  date={Date.now()}
                  title={capitalize(title)}
                  description={body}
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
