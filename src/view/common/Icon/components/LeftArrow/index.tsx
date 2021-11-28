import React from 'react';
import { IIcon } from 'src/types/IIcon';

const LeftArrow: React.FC<IIcon> = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3333 6L16 12L10.3333 18L9 16.5882L13.3333 12L9 7.41177L10.3333 6Z"
        fill="inherit"
      />
    </svg>
  );
};

LeftArrow.defaultProps = {
  fill: 'inherit',
};

export default LeftArrow;
