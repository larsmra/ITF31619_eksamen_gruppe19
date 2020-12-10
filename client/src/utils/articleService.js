import http from './http';
import { getCsrfToken } from './authService';

const API_PATH = '/articles';

export const list = async (page, search = '', filter = []) => {
  try {
    let articles;
    if (search && filter.length > 0) {
      articles = await http.get(
        `${API_PATH}/pages/${page}/search/${search}/filter/${filter}`
      );
    } else if (search) {
      articles = await http.get(`${API_PATH}/pages/${page}/search/${search}`);
    } else if (filter.length > 0) {
      articles = await http.get(`${API_PATH}/pages/${page}/filter/${filter}`);
    } else {
      articles = await http.get(`${API_PATH}/pages/${page}`);
    }
    return articles;
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

export const update = async (id, data) => {
  try {
    await getCsrfToken();
    return await http.put(`${API_PATH}/${id}`, { ...data });
  } catch (err) {
    return err.response;
  }
};

export const create = async (data) => {
  try {
    await getCsrfToken();
    const article = new FormData();
    article.append('title', data.title);
    article.append('ingress', data.ingress);
    article.append('content', data.content);
    article.append('category', data.category);
    article.append('author', data.author);
    article.append('image', data.image);
    article.append('hidden', `${data.hidden}`);

    console.log(data);
    console.log(article);

    return await http.post(`${API_PATH}`, article, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err) {
    return err.response;
  }
};

export const remove = async (id) => {
  try {
    await getCsrfToken();
    return await http.delete(`${API_PATH}/${id}`);
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
