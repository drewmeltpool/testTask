import React, { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    (async () => {
      const data = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=6'
      ).then((response) => response.json());

      console.log(data);
    })();
  }, []);

  return <section></section>;
};

export default Home;
