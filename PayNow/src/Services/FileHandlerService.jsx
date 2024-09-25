import { API_BASE_URL } from '../Config';
import axiosInstance from '../Helpers/AxiosApiHelper';


const BASE_URL = API_BASE_URL;


export const uploadFileApi = async (data)=>{
  const uploadURL = BASE_URL + "/file/upload";
  const response = await axiosInstance.post(uploadURL, data, {
    headers: {'Content-Type': 'multipart/form-data'}
  });
  return response;
}

export const fetchFileApi = async (data)=>{
  const fetchURL = BASE_URL + "/file/fetch";
  const response = await axiosInstance.post(fetchURL, data);
  return response;
}
