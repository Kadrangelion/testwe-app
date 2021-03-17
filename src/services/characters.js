import axios from 'axios';

export const getCharacter = (id) => {
  return axios.get(`/characters/${id}`);
}