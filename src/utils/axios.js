import axios from 'axios';

export function setup() {
  axios.defaults.baseURL = 'https://www.anapioficeandfire.com/api/';

  axios.interceptors.request.use((config) => {
    // Here we can add some bonus config for all request like auth tokens & global params/cookies
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    //Here we return directly data instead of full axios response object for all succeeded requests
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

}
