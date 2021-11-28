import React from 'react';
import Image from 'src/view/common/Image';
import empty from 'src/assets/image/empty.svg';

const Empty: React.FC = () => {
  return (
    <div className="empty">
      <Image src={empty} className="empty__image" />
      <h4 className="empty__title">No results found</h4>
    </div>
  );
};

export default Empty;
