import axios from "axios";

const apiURL = process.env.REACT_APP_API;

export const getTasks = () => {
  return axios.get(`${apiURL}/tasks`);
};

export const createTask = (task) => {
  return axios.post(`${apiURL}/tasks`, task);
};

export const updateTask = (task, id) => {
  return axios.patch(`${apiURL}/tasks/${id}`, task);
};

export const deleteTask = (id) => {
  return axios.delete(`${apiURL}/tasks/${id}`);
};
