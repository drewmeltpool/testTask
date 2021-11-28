import React from 'react';

import SearchBox from './components/SearchBox';
import NewPost from './components/NewPosts';
import TopPost from './components/TopPosts';
import InterestingPosts from './components/InterestingPosts';

const Home: React.FC = () => {
  return (
    <div className="container">
      <SearchBox />
      <NewPost />
      <TopPost />
      <InterestingPosts />
    </div>
  );
};

export default Home;
