import http from './http';

const API_URL = '/inquiries';

export const list = async () => {
    try {
        return await http.get(`${API_URL}`);
    } catch (err) {
        return err.response.data;
    }
};

export const create = async (data) => {
    console.log("I create metoden");
  try {
    return await http.post(`${API_URL}`, data);
  } catch (err) {
      console.log("Her gikk det galt");
    return err.response;
  }
};

export default {  
    list,
    create,
};