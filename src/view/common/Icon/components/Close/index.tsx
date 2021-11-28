import React from 'react';
import { IIcon } from 'src/types/IIcon';

const Close: React.FC<IIcon> = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 7L12 12M17 17L12 12M12 12L17 7L7 17"
        stroke="#C5D1DB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Close.defaultProps = {
  fill: 'inherit',
};

export default Close;
