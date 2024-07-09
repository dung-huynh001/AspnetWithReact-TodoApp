import axios from "axios";

const request = axios.create({
    baseURL: 'http://localhost:7104/api/',

});

const get = async ({ url, options = {} }) => {
    const response = await request.get(url, options);
    return response.data;
}


const post = async ({ url, data = {},  options = {} }) => {
    const response = await request.post(url, data, options);
    return response.data;
}

const put = async ({ url, data = {},  options = {} }) => {
    const response = await request.put(url, data, options);
    return response.data;
}

const patch = async ({ url, data = {},  options = {} }) => {
    const response = await request.patch(url, data, options);
    return response.data;
}


const remove = async ({ url, options = {} }) => {
    const response = await request.delete(url, options);
    return response.data;
}

export default request;

export { get, post, put, patch, remove };