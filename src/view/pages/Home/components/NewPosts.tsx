import React from 'react';
import useFetch from 'src/hooks/useFetch';
import { IPlant } from 'src/types/Plant';
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
            src={
              'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
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
