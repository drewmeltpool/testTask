import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from 'src/hooks';
import FlatList from 'src/view/common/FlatList';
import Post from 'src/view/components/Post';
import EmptySearch from './Empty';

const Search: React.FC = () => {
  const [param] = useSearchParams();
  const searchParam = param.get('text') || '';

  const [plants, done] = useFetch('https://jsonplaceholder.typicode.com/posts');

  const plantsResult = (plants || []).filter(({ title }: any) =>
    title.includes(searchParam)
  );

  return (
    <div className="container">
      {done &&
        (plantsResult.length ? (
          <FlatList
            data={plantsResult}
            className="search__answer"
            itemProps={{ tag: React.Fragment }}
            component={({ title, body }) => (
              <Post
                variant="xs"
                date={Date.now()}
                title={title}
                description={body}
              />
            )}
          />
        ) : (
          <EmptySearch />
        ))}
    </div>
  );
};

export default Search;
