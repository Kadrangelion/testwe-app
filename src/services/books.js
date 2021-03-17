import axios from 'axios';

export const getAllBooks = () => {
  return axios.get('/books');
}

export const getBook = (id) => {
  return axios.get(`/books/${id}`);
}
