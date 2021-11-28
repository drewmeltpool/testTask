import React from 'react';
import { classNames } from 'src/utils';
import { IButton } from './IProps';

const Button: React.FC<IButton> = ({
  text,
  children,
  className,
  onClick,
  variant,
  outline,
  rounded,
  ...rest
}) => (
  <button
    onClick={onClick}
    className={classNames(
      'btn',
      variant && `btn--${variant}`,
      outline && 'outline',
      rounded && 'rounded',
      className
    )}
    {...rest}
  >
    {text || children}
  </button>
);

export default Button;
