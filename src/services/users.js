import axios from 'axios';
import { BASE_URL, LIMIT } from 'constants';

export const getUsers = async page => {
  const params = {
    page: `${page}`,
    limit: `${LIMIT}`,
  };

  return await axios.get(`${BASE_URL}`, { params }).then(({ data }) => data);
};
