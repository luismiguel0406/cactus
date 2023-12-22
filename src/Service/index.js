import axios from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  withCredentials: false,
  //headers: { "Access-Control-Allow-Origin": "*" },
  validateStatus: function (status) {
    if (status >= 400 && status <= 500) {
      console.error("Server error");
      return Promise.reject();
    }
    return status >= 200 && status < 300;
  },
});

export const getData = async (url) => {
  const { data } = await http.get(url);
  return data;
};

export const postData = async (url, body) => {
  const { data } = await http.post(url, body);
  return data;
};

export const putData = async (url, body) => {
  const { data } = await http.put(url, body);
  return data;
};

export const deleteData = async (url) => {
  const { data } = await http.delete(url);
  return data;
};
