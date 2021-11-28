import React from 'react';
import useFetch from 'src/hooks/useFetch';
import { IPlant } from 'src/types/Plant';
import FlatList from 'src/view/common/FlatList';
import Post from 'src/view/components/Post';

const TopPost: React.FC = () => {
  const [plants] = useFetch<IPlant[]>(
    `https://jsonplaceholder.typicode.com/posts?_limit=2`
  );

  return (
    <section className="section">
      <h2 className="section__title">TOP of the Day</h2>
      <FlatList
        className="grid grid-column-2"
        itemProps={{
          tag: React.Fragment,
        }}
        data={plants || []}
        component={(plant: IPlant) => (
          <Post
            variant="m"
            src={
              'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            }
            date={Date.now()}
            title={plant.title}
            description={plant.body}
          />
        )}
      />
    </section>
  );
};

export default TopPost;
