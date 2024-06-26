
import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../Config';
import axiosInstance from '../Helpers/AxiosApiHelper'

const BASE_URL = API_BASE_URL;

// export const [isUserLoggedIn, setUserLoggedIn] = useState('');

export const loginApi = async (data)=>{
  const loginURL = BASE_URL + "/login";
  const response = await axiosInstance.post(loginURL, data);
  return response;
}

export const signupApi = async (data)=>{
  const singupUrl = BASE_URL + "/signup";
  const response = await axiosInstance.post(singupUrl, data);
  return response;
}

export const logoutApi = async ()=>{
  const logoutUrl = BASE_URL + '/logout'
  const resp = await axiosInstance.get(logoutUrl)
  return resp;
}