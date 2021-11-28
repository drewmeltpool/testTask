import React from 'react';
import { classNames } from 'src/utils';
import FlatList from 'src/view/common/FlatList';

const PostSkeleton: React.FC<any> = ({ variant, len, className }) => {
  return (
    <div className={className}>
      <FlatList
        data={Array(len)}
        component={() => (
          <div
            className={classNames('post-skeleton', `post-skeleton--${variant}`)}
          >
            <div className="post-skeleton__image" />
            <div className="post-skeleton__body">
              <div className="post-skeleton__date" />
              <div className="post-skeleton__title" />
              <div className="post-skeleton__description" />
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default PostSkeleton;
