import http from './http';
import { getCsrfToken } from './authServices';

const API_PATH = '/articles';

export const list = async (page, search = '') => {
  try {
    const articles = search
      ? await http.get(`${API_PATH}/pages/${page}/search/${search}`)
      : await http.get(`${API_PATH}/pages/${page}`);
    return articles;
  } catch (err) {
    return err.response;
  }
};

export const get = async (id) => {
  try {
    return await http.get(`${API_PATH}/${id}`);
  } catch (err) {
    return err.response;
  }
};

export const update = async (id, data) => {
  try {
    return await http.put(`${API_PATH}/${id}`, data);
  } catch (err) {
    return err.response;
  }
};

export const create = async (data) => {
  try {
    await getCsrfToken();
    return await http.post(`${API_PATH}/`, { ...data });
  } catch (err) {
    return err.response;
  }
};

export const remove = async (id) => {
  try {
    await getCsrfToken();
    const del = await http.delete(`${API_PATH}/${id}`);
    console.log(`Respons: ${del}`);
    console.log(del);
    return del;
  } catch (err) {
    return err.response;
  }
};

export default {
  create,
  list,
  get,
  remove,
};
