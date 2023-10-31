import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import css_Navigation from './Navigation.module.css';

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={css_Navigation.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
