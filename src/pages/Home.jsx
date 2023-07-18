import React from 'react';
import { getCurrentFormattedDate } from '../utils/getDate';

const Home = () => {

  console.log(getCurrentFormattedDate());

  return (
    <div>Home</div>
  );
}

export default Home;