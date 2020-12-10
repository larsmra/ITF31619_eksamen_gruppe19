import http from './http';
import { getCsrfToken } from './authService';

const API_PATH = '/categories';

export const list = async () => {
  try {
    await getCsrfToken();
    return await http.get(`${API_PATH}`);
  } catch (err) {
    return err.response;
  }
};

export const get = async (id) => {
  try {
    await getCsrfToken();
    return await http.get(`${API_PATH}/${id}`);
  } catch (err) {
    return err.response;
  }
};

export const create = async (data) => {
  try {
    await getCsrfToken();
    return await http.post(`${API_PATH}`, data);
  } catch (err) {
    return err.response;
  }
};

export default {
  create,
  list,
  get,
};
