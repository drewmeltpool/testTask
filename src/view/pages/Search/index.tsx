import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FlatList from 'src/view/common/FlatList';
import Post from 'src/view/components/Post';

const Search: React.FC = () => {
  const [param] = useSearchParams();
  const [result, setResult] = useState([]);
  const searchParam = param.get('text') || '';

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await data.json();
        setResult(
          json.filter(({ title }: { title: string }) =>
            title.includes(searchParam)
          )
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchParam]);

  return (
    <div className="container">
      <FlatList
        data={result}
        component={({ title, body }) => (
          <Post
            variant={'xs'}
            src={''}
            date={Date.now()}
            title={title}
            description={body}
          />
        )}
      />
    </div>
  );
};

export default Search;
