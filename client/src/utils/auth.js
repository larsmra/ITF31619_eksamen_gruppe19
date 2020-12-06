import http from './http';

const API_PATH = '/users';

const getCsrfToken = async () => {
  try {
    const { data } = await http.get('/csrf-token');
    http.defaults.headers['X-CSRF-Token'] = data.data;
  } catch (err) {
    return err.response;
  }
};

export const getUser = async () => {
  try {
    const user = await http.get(`${API_PATH}/me`);
    return user;
  } catch (err) {
    return err.response;
  }
};

export const login = async (credentials) => {
  try {
    await getCsrfToken();
    const test = await http.post(`${API_PATH}/login`, { ...credentials });
    console.log(`test: ${test}`);
    return test;
  } catch (err) {
    console.log(err.response);
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
