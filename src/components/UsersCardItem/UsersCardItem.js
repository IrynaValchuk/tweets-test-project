import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from 'images/logo.svg';
import fond from 'images/fond.png';

import css from 'components/UsersCardItem/UsersCardItem.module.css';

export const UsersCardItem = ({ id, name, avatar, followers, tweets }) => {
  const isUserFollowing =
    JSON.parse(localStorage.getItem(`user${id}`))?.following ?? false;
  const [isFollowing, setIsFollowing] = useState(isUserFollowing);
  const [currentFollowers, setCurrentFollowers] = useState(followers);
  const location = useLocation();

  const handleBtnClick = userId => {
    const userCard = { userId, following: !isFollowing };
    localStorage.setItem(`user${userId}`, JSON.stringify(userCard));

    const { following } = JSON.parse(localStorage.getItem(`user${userId}`));

    setIsFollowing(following);

    !isFollowing
      ? setCurrentFollowers(currentFollowers + 1)
      : setCurrentFollowers(currentFollowers - 1);

    const currentFollowingUsers = JSON.parse(
      localStorage.getItem(`followingUsersId`)
    );
    if (
      isFollowing &&
      JSON.parse(localStorage.getItem('followingUsersId')).includes(userId)
    ) {
      const index = currentFollowingUsers.indexOf(userId);
      currentFollowingUsers.splice(index, 1);
      localStorage.setItem(
        'followingUsersId',
        JSON.stringify(currentFollowingUsers)
      );
    } else {
      currentFollowingUsers.push(userId);

      localStorage.setItem(
        'followingUsersId',
        JSON.stringify(currentFollowingUsers)
      );
    }
  };

  const formattedFollowers = currentFollowers.toLocaleString('en-US');

  return (
    <li className={css.item}>
      <Link className={css.link} to={`tweets`} state={{ from: location }}>
        <img className={css.logo} src={logo} alt="Logo GoIT" />
        <img
          className={css.fond}
          src={fond}
          alt="Background img"
          width="308px"
          height="168px"
        />
        <div className={css.line}></div>
        <div className={css.avatarBox}>
          <img
            className={css.avatar}
            src={avatar}
            alt={name}
            width="62px"
            height="62px"
          />
        </div>
        <div className={css.wrap}>
          <p className={css.text}>{name}</p>
          <p className={css.text}>{tweets} Tweets</p>
          <p className={css.text}>{formattedFollowers} Followers</p>
        </div>
      </Link>
      {!isFollowing ? (
        <button
          type="button"
          className={css.btn}
          onClick={() => handleBtnClick(id)}
        >
          Follow
        </button>
      ) : (
        <button
          type="button"
          className={css.btnFollowing}
          onClick={() => handleBtnClick(id)}
        >
          Following
        </button>
      )}
    </li>
  );
};

UsersCardItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
};
