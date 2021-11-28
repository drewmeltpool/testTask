import React from 'react';
import { IModal } from 'src/types/IModal';
import { classNames } from 'src/utils';

const Modal: React.FC<IModal> = ({
  size,
  isOpen,
  isCloseOnOverlay,
  closeModal,
  className,
  children,
}) => {
  const overlayHandler = isCloseOnOverlay ? closeModal : undefined;

  return (
    <>
      {isOpen && (
        <div className="modal__overlay" onClick={overlayHandler}>
          <div
            className={classNames('modal', size && `modal--${size}`, className)}
            onClick={(e) => e.stopPropagation()}
          >
            {children({ closeModal })}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
