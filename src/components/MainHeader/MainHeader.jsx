import React from 'react';

import Navigation from './Navigation';
import css_MainHeader from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={css_MainHeader['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
