import axios from "axios";
import constants from "../../config/constants";
axios.defaults.baseURL = constants.apiUrl;

export const createShortUrl = obj => {
  const requestUrl = "shorturl/new";
  return axios.post(requestUrl, obj);
};

export const getOriginalUrl=()=>{
    const shortid=window.location.pathname.split("/")[1]
    return axios.get('shorturl?shortid='+shortid)
}