import { API_BASE_URL } from '../Config';
import axiosInstance from '../Helpers/AxiosApiHelper';

const BASE_URL = API_BASE_URL + '/authenticate';

export const searchUser = async (data)=>{
  let url = BASE_URL + "/searchUser";
  const response = await axiosInstance.post(url, data);
  return response;
}