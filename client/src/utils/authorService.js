import http from './http';

const API_PATH = '/authors';

export const listAuthors = async () => {
  try {
    return await http.get(`${API_PATH}`);
  } catch (err) {
    return err.response;
  }
};
