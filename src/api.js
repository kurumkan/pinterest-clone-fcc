import axios from 'axios';

export const getPins = () => {
  return axios.get('pins');
};
