import http from './http';
import { getCsrfToken } from './auth';

const API_PATH = '/articles';

export const list = async () => {
  try {
    await getCsrfToken();
    return await http.get(`${API_PATH}/`);
  } catch (err) {
    return err.response;
  }
};

export const createArticle = async (data) => {
  try {
    await getCsrfToken();
    return await http.post(`${API_PATH}/`, { ...data });
  } catch (err) {
    return err.response;
  }
};
