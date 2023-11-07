import axios from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://service-dev.asms.app/api',
  timeout: 10000,
  //headers: { "Access-Control-Allow-Origin": "*" },
  validateStatus: function (status) {
    if (status >= 400 && status <= 500) {
      console.error("Server error");
      return Promise.reject();
    }
    return status >= 200 && status < 300;
  },
});

export const getData = (url)=>{
   
}

export const postData = ()=>{

}