import axios from 'axios';

const app = axios.create({
    baseURL: 'https://localhost:5000/api',
});


const http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    put: app.put,
    patch: app.patch
}

export default http;