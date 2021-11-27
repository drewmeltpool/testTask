import React from 'react';
import { classNames } from 'utils';

interface IModal {
  size?: 'm';
  isOpen: boolean;
  isCloseOnOverlay?: boolean;
  closeModal: () => void;
  children: (_props: { closeModal: () => void }) => React.ReactNode | string;
  className?: string;
}

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
