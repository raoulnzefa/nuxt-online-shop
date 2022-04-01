import axios from 'axios';

//axios init
const apiConfig = {
   baseUrl: 'https://api.aptekadom.kz/api/',
}

const instance = axios.create({
   baseURL: apiConfig.baseUrl,
});


export default instance;