import React from 'react';
import { IIcon } from '../../IIcon';

const Logo: React.FC<IIcon> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="24"
      viewBox="0 0 19 24"
      fill={fill}
    >
      <path
        d="M9.17199 0C11.517 1.33575 13.0871 3.34385 13.8824 5.57997C11.8587 6.54881 10.2009 8.15628 9.17199 10.1403C8.14308 8.15628 6.4853 6.54881 4.46155 5.57997C5.25685 3.34385 6.827 1.33575 9.17199 0Z"
        fill="inherit"
      />
      <path
        d="M0 5.71429C5.06552 5.71429 9.17193 9.80768 9.17193 14.8571C9.17193 9.80768 13.2783 5.71429 18.3439 5.71429V14.8571C18.3439 19.9066 14.2374 24 9.17193 24C4.10641 24 0 19.9066 0 14.8571V5.71429Z"
        fill="inherit"
      />
    </svg>
  );
};

Logo.defaultProps = {
  fill: 'inherit',
};

export default Logo;