import React from 'react';
import Image from 'src/view/common/Image';
import empty from 'src/assets/image/empty.svg';
import { Link } from 'react-router-dom';

const Empty: React.FC = () => {
  return (
    <div className="empty">
      <Image src={empty} className="empty__image" />
      <h4 className="empty__title">No results found</h4>
      <Link to="/" className="link empty__link">
        Go Home
      </Link>
    </div>
  );
};

export default Empty;
