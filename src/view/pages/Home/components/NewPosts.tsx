import React from 'react';
import { useFetch } from 'src/hooks';
import { IPlant } from 'src/types/IPlant';
import Post from 'src/view/components/Post';

const NewPost: React.FC = () => {
  const [plant] = useFetch<IPlant>(
    `https://jsonplaceholder.typicode.com/posts/${6}`
  );

  return (
    <div className="new-post">
      <div className="new-post__title">New</div>
      <div className="new-post__inner">
        {plant && (
          <Post
            variant="l"
            date={Date.now()}
            title={plant.title}
            description={plant.body}
          />
        )}
      </div>
    </div>
  );
};

export default NewPost;
