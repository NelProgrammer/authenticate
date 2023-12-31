import React, { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import css_Home from './Home.module.css';

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={css_Home.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
