import axios from "axios";

const request = axios.create({
    baseURL: 'https://localhost:7104/api/',
});

const handleRequest = async (axiosPromise) => {
    try {
      const response = await axiosPromise;
      return response.data;
    } catch (error) {
      console.error('API call error:', error);
      throw error; // rethrow the error after logging it
    }
  };
  
  const get = async (url, options = {}) => {
    return await handleRequest(request.get(url, options));
  };
  
  const post = async (url, data = {}, options = {}) => {
    return await handleRequest(request.post(url, data, options));
  };
  
  const put = async (url, data = {}, options = {}) => {
    return await handleRequest(request.put(url, data, options));
  };
  
  const patch = async (url, data = {}, options = {}) => {
    return await handleRequest(request.patch(url, data, options));
  };
  
  const remove = async (url, options = {}) => {
    return await handleRequest(request.delete(url, options));
  };
  
  export default request;
  export { get, post, put, patch, remove };