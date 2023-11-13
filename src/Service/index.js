import axios from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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

export const getData = async(url)=>{
   const response = await http.get(url);
   const data = await response.data;
   return data;
}

export const postData = ()=>{


}