import { API_BASE_URL } from '../Config';
import axiosInstance from '../Helpers/AxiosApiHelper';


const BASE_URL = API_BASE_URL + '/authenticate';


export const homeApi = async (data)=>{
  const homeURL = BASE_URL + "/home";
  const response = await axiosInstance.post(homeURL, data);
  return response;
}
