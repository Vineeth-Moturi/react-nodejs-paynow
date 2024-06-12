import axios from 'axios';
import { API_BASE_URL } from '../Config';

const BASE_URL = API_BASE_URL;


export const loginApi = async (data)=>{
  const loginURL = BASE_URL + "/login";
  const response = await axios.post(loginURL, data);
  response.data;
}

export const signupApi = async (data)=>{
  const singupUrl = BASE_URL + "/signup";
  console.log("Reached AuthService", data)
  const response = await axios.post(singupUrl, data);
  console.log("response",response)
  response.data;
}