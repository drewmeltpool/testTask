import React, { useState } from 'react';
import Button from 'src/view/common/Button';
import Icon from 'src/view/common/Icon';
import Modal from 'src/view/common/Modal';
import Post from 'src/view/components/Post';
import FlatList from 'src/view/common/FlatList';
import { capitalize, debounce } from 'src/utils';
import { useFetch } from 'src/hooks';
import Empty from '../../Empty';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavbarModal: React.FC<IProps> = ({ onClose, isOpen }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const [plants] = useFetch(
    inputValue && 'https://jsonplaceholder.typicode.com/posts'
  );

  const plantsResult = inputValue
    ? (plants || []).filter(({ title }: any) => title.includes(inputValue))
    : [];
  const searchDebounce = debounce(setInputValue, 300);

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

            <form className="form__search" onSubmit={(e) => e.preventDefault()}>
              <input
                name="search"
                placeholder="Search plants"
                autoComplete="off"
                className="form__search-input"
                onChange={(e) => {
                  searchDebounce(e.target.value);
                }}
              />
              <Icon icon="Logo" className="form__search-icon" />
            </form>
            {plantsResult.length || !inputValue ? (
              <FlatList
                className="search__result"
                data={plantsResult}
                itemProps={{
                  tag: React.Fragment,
                }}
                component={({ title, body }) => (
                  <Post
                    variant="xs"
                    date={Date.now()}
                    title={capitalize(title)}
                    description={body}
                  />
                )}
              />
            ) : (
              <div className="search-empty">
                <Empty />
              </div>
            )}
          </>
        );
      }}
    </Modal>
  );
};

export default NavbarModal;
