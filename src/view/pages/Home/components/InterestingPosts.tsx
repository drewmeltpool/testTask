import React, { useEffect, useState } from 'react';
import { IPlant } from 'src/types/IPlant';
import FlatList from 'src/view/common/FlatList';
import Post from 'src/view/components/Post';
import AddBlock from './AddBlock';

const InterestingPosts: React.FC = () => {
  const [plants, setPlants] = useState<IPlant[]>([]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (fetching) {
      (async () => {
        fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`
        )
          .then((d) => d.json())
          .then((d: IPlant[]) => setPlants((prev) => [...prev, ...d]))
          .then(() => setPage((prev) => prev++))
          .catch(console.error)
          .finally(() => setFetching(false));
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetching]);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <section className="section">
      <h2 className="section__title">Interesting</h2>
      <FlatList
        className="grid grid-column-3"
        itemProps={{
          tag: React.Fragment,
        }}
        data={plants?.slice(0, 6) || []}
        component={(plant: IPlant) => (
          <Post
            variant="s"
            date={Date.now()}
            title={plant.title}
            description={plant.body}
          />
        )}
      />
      <AddBlock />
      <FlatList
        className="grid grid-column-3"
        itemProps={{
          tag: React.Fragment,
        }}
        data={plants?.slice(6) || []}
        component={(plant: IPlant) => (
          <Post
            variant="s"
            date={Date.now()}
            title={plant.title}
            description={plant.body}
          />
        )}
      />
    </section>
  );
};

export default InterestingPosts;
