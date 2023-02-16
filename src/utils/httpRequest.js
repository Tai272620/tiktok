import axios from "axios";

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, optios = {}) => {
    const response = await httpRequest.get(path, optios);
    return response.data;
}

export default httpRequest;

