import http from './http';

const API_DOWNLOAD_PATH = '/download';

export const download = async (id) => {
  try {
    return await http.get(`${API_DOWNLOAD_PATH}/${id}`, {
      responseType: 'blob',
    });
  } catch (err) {
    return err.response;
  }
};
