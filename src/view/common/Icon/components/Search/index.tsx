import React from 'react';
import { IIcon } from '../../IIcon';

const Search: React.FC<IIcon> = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.206 16.617L18.296 19.703C18.686 20.099 19.316 20.099 19.706 19.703C20.098 19.308 20.098 18.669 19.706 18.273L16.626 15.193C17.496 14.025 18.013 12.577 18.013 11.007C18.013 7.137 14.876 4 11.007 4C7.137 4 4 7.137 4 11.007C4 14.877 7.137 18.014 11.007 18.014C12.582 18.014 14.036 17.494 15.206 16.617ZM11.006 16.012C8.243 16.012 6.002 13.772 6.002 11.007C6.002 8.243 8.242 6.002 11.007 6.002C13.771 6.002 16.011 8.242 16.011 11.007C16.011 13.771 13.771 16.012 11.008 16.012H11.006Z"
        fill={fill}
      />
    </svg>
  );
};

Search.defaultProps = {
  fill: 'inherit',
};

export default Search;