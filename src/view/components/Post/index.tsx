import React from 'react';
import { classNames } from 'utils';
import Image from 'view/common/Image';

interface IPost {
  variant: 'l' | 'm' | 's' | 'xs';
  className?: string;
  src: string;
  date: string | number;
  title: string;
  description: string;
}

const Post: React.FC<IPost> = ({
  variant,
  className,
  src,
  date,
  title,
  description,
}) => {
  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString('ENG', { month: 'long' });

  return (
    <div className={classNames('post', `post--${variant}`, className)}>
      <Image src={src} className="post__image" />
      <div className="post__body">
        <h5 className="post__date">{`${month} ${day}`}</h5>
        <h5 className="post__title">{title}</h5>
        <h5 className="post__description">{description}</h5>
      </div>
    </div>
  );
};

export default Post;
