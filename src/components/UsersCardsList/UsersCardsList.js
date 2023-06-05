import { Loader, UsersCardItem, Button } from 'components';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getUsers } from 'services';

import css from 'components/UsersCardsList/UsersCardsList.module.css';

export const UsersCardsList = () => {
  const [usersCards, setUsersCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('followingUsersId'))) {
      return;
    }
    localStorage.setItem('followingUsersId', JSON.stringify([]));
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await getUsers(page);
        setUsersCards(prevUsers => page === 1 ? response : [...prevUsers, ...response]);
        if (response.length === 0) {
          toast.error(`Please try again.`);
        } else {
          setLoadMore(page < 7);
        }
      } catch (error) {
        toast.error(`${error.message}`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={`${css.box} container`}>
      {isLoading && <Loader />}
      <ul className={css.cardsList}>
        {usersCards.map(userCard => (
          <UsersCardItem key={userCard.id} {...userCard} />
        ))}
      </ul>
      {loadMore && <Button onClick={handleLoadMore} />}
    </div>
  );
};
