import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import css from 'components/TweetsCard/TweetsCard.module.css';

export const TweetsCard = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  return (
    <div className="container">
      <Link to={backLinkLocationRef.current} className={css.btn}>
        Go back
      </Link>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.text}>Tweets</p>
          <p className={css.descr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nulla
            aliquet quam rutrum volutpat id ac metus. Proin facilisis nisi quis
            lorem hendrerit, et congue nulla tincidunt.
          </p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Tweets</p>
          <p className={css.descr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nulla
            aliquet quam rutrum volutpat id ac metus. Proin facilisis nisi quis
            lorem hendrerit, et congue nulla tincidunt.
          </p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Tweets</p>
          <p className={css.descr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nulla
            aliquet quam rutrum volutpat id ac metus. Proin facilisis nisi quis
            lorem hendrerit, et congue nulla tincidunt.
          </p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Tweets</p>
          <p className={css.descr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nulla
            aliquet quam rutrum volutpat id ac metus. Proin facilisis nisi quis
            lorem hendrerit, et congue nulla tincidunt.
          </p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Tweets</p>
          <p className={css.descr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nulla
            aliquet quam rutrum volutpat id ac metus. Proin facilisis nisi quis
            lorem hendrerit, et congue nulla tincidunt.
          </p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Tweets</p>
          <p className={css.descr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nulla
            aliquet quam rutrum volutpat id ac metus. Proin facilisis nisi quis
            lorem hendrerit, et congue nulla tincidunt.
          </p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Tweets</p>
          <p className={css.descr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nulla
            aliquet quam rutrum volutpat id ac metus. Proin facilisis nisi quis
            lorem hendrerit, et congue nulla tincidunt.
          </p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Tweets</p>
          <p className={css.descr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nulla
            aliquet quam rutrum volutpat id ac metus. Proin facilisis nisi quis
            lorem hendrerit, et congue nulla tincidunt.
          </p>
        </li>
        <li className={css.item}>
          <p className={css.text}>Tweets</p>
          <p className={css.descr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nulla
            aliquet quam rutrum volutpat id ac metus. Proin facilisis nisi quis
            lorem hendrerit, et congue nulla tincidunt.
          </p>
        </li>
      </ul>
    </div>
  );
};
