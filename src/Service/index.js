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
  try {
    const response = await http.get(url);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postData = async (url, body) => {
  try {
    const response = await http.post(url, body);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
