import React from 'react';

import Card from '../UI/Card/Card';
import css_Home from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={css_Home.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
