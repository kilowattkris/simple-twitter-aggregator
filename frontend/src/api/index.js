import axios from "axios";
import config from "../config";

const api = {
  get: (url, query) => {
    query = (typeof query === "undefined" ? {} : query);
    console.log(config);
    return axios({
      method: "get",
      baseURL: config.API_URL,
      url: url,
      params: query
    }).then(response => new Promise(resolve => {
      resolve(response);
    })).catch(error => new Promise((resolve, reject) => {
      reject(error);
    }));
  }
}

export default api;