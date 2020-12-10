import http from './http';

const API_UPLOAD_PATH = '/upload';
const API_DOWNLOAD_PATH = '/download';

export const upload = async (image) => {
  try {
    const data = new FormData();
    data.append.apply('image', image);
    return await http.post(`${API_UPLOAD_PATH}`, image, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err) {
    return err.response;
  }
};

export const download = async (id) => {
  try {
    return await http.get(`${API_DOWNLOAD_PATH}/${id}`);
  } catch (err) {
    return err.response;
  }
};
