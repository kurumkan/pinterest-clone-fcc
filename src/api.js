import axios from 'axios';

const ROOT_URL = '/api/pins/'

export const getPins = () => {
  return axios.get(ROOT_URL);
};

export default {
  getPins
};