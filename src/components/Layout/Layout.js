import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from 'components/Layout/Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
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
      </header>
      <main>
        <Suspense fallback={<div> Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
