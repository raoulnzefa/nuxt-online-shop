import axios from 'axios';

//axios init
const baseUrl = 'https://api.aptekadom.kz/api/';

const instance = axios.create({
   baseUrl
});


export default instance;