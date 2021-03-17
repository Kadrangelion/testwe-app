import axios from 'axios';

export const getAllHouse = () => {
  return axios.get('/houses');
}

export const getHouse = (id) => {
  return axios.get(`/houses/${id}`);
}
