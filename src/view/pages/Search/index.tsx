import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from 'src/hooks/useFetch';
import FlatList from 'src/view/common/FlatList';
import Empty from 'src/view/components/Empty';
import Post from 'src/view/components/Post';

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
            className="search__result"
            itemProps={{ tag: React.Fragment }}
            component={({ title, body }) => (
              <Post
                variant="xs"
                src="https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80"
                date={Date.now()}
                title={title}
                description={body}
              />
            )}
          />
        ) : (
          <Empty />
        ))}
    </div>
  );
};

export default Search;
