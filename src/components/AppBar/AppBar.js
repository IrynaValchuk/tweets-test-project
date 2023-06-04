import { NavLink } from 'react-router-dom';

import css from 'components/AppBar/AppBar.module.css';

export const AppBar = () => {
  return (
    <nav className="container">
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tweets" className={css.link}>
            Tweets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
