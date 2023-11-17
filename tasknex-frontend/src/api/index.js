import axios from 'axios';

const apiURL = process.env.REACT_APP_API;

export const getTasks = async () => {
  return axios.get(`${apiURL}/tasks`);
};
