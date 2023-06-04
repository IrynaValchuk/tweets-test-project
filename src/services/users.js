import axios from 'axios';
import { BASE_URL, LIMIT } from 'constants';

export const getUsers = async page => {
  const params = {
    page: `${page}`,
    limit: `${LIMIT}`,
  };
  try {
    const responce = await axios.get(`${BASE_URL}`, { params });
    return responce.data;
  } catch (error) {
    return console.log(error.massage);
  }
};
