import React from 'react';

import Navigation from './Navigation';
import css_MainHeader from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={css_MainHeader['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
