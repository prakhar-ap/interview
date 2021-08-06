import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';

export default axios;
