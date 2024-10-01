import { API_BASE_URL } from '../Config';
import axiosInstance from '../Helpers/AxiosApiHelper';


export const BASE_URL = API_BASE_URL;


export const uploadFileApi = async (data, userEmail)=>{
  const uploadURL = BASE_URL + "/file/upload";
  const response = await axiosInstance.post(uploadURL, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'user-email': userEmail
    }
  });
  return response;
}

export const fetchFileApi = async (data)=>{
  const fetchURL = BASE_URL + "/file/fetch?file_name="+ data;
  const response = await axiosInstance.get(fetchURL);
  return response;
}
