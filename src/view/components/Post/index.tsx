import React from 'react';
import { capitalize, classNames } from 'src/utils';
import Image from 'src/view/common/Image';

interface IPost {
  variant: 'l' | 'm' | 's' | 'xs';
  className?: string;
  src?: string;
  date: string | number;
  title: string;
  description: string;
}

const Post: React.FC<IPost> = ({
  variant,
  className,
  src = 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
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
        <h5 className="post__title">{capitalize(title)}</h5>
        <h5 className="post__description">{description}</h5>
      </div>
    </div>
  );
};

export default Post;
