import http from './http';

const API_PATH = '/users';

export const getCsrfToken = async () => {
  try {
    const { data } = await http.get('/csrf-token');
    http.defaults.headers['X-CSRF-Token'] = data.data;
  } catch (err) {
    return err.response;
  }
};

export const getUser = async () => {
  try {
    await getCsrfToken();
    return await http.get(`${API_PATH}/me`);
  } catch (err) {
    return err.response;
  }
};

export const login = async (credentials) => {
  try {
    await getCsrfToken();
    return await http.post(`${API_PATH}/login`, { ...credentials });
  } catch (err) {
    return err.response;
  }
};

export const logout = async () => {
  try {
    await getCsrfToken();
    return await http.post(`${API_PATH}/logout`);
  } catch (err) {
    return err.resonse;
  }
};

export const register = async (credentials) => {
  try {
    await getCsrfToken();
    return await http.post(`${API_PATH}/register`, { ...credentials });
  } catch (err) {
    return err.response;
  }
};
