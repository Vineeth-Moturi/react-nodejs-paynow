
import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../Config';

const BASE_URL = API_BASE_URL;

// export const [isUserLoggedIn, setUserLoggedIn] = useState('');

export const loginApi = async (data)=>{
  const loginURL = BASE_URL + "/login";
  const response = await axios.post(loginURL, data);
  response.data;
}

export const signupApi = async (data)=>{
  const singupUrl = BASE_URL + "/signup";
  const response = await axios.post(singupUrl, data);
  return response;
}