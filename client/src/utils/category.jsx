import http from './http';
import { getCsrfToken } from './auth';

const API_PATH = '/categories';

export const createCategory = async (data) => {
  try {
    await getCsrfToken();
    return await http.post(`${API_PATH}/`, { ...data });
  } catch (err) {
    return err.response;
  }
};
