import React from 'react';
import { Link } from 'react-router-dom';
import Empty from 'src/view/components/Empty';

const EmptySearch: React.FC = () => {
  return (
    <div className="search-empty">
      <Empty />
      <Link to="/" className="link primary-link">
        Go Home
      </Link>
    </div>
  );
};

export default EmptySearch;
