import React from 'react';
import { useFetch } from 'src/hooks';
import { IPlant } from 'src/types/IPlant';
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
