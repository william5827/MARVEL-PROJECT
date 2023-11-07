import axios from 'axios';
import crypto from 'crypto-js';

const PUBLIC_KEY = '5797389feeed87751399712d747625e6';
const PRIVATE_KEY = '44acce3c7506f1857df32ec0af898f5f96c17d15';

const timestamp = new Date().getTime();
const concatenatedString = timestamp + PRIVATE_KEY + PUBLIC_KEY;
const hash_md5 = crypto.MD5(concatenatedString).toString();

const base_url = 'https://gateway.marvel.com/v1/public/';
const endpoint = 'characters';  // Ou outro endpoint da API que você deseja acessar


const getCharacters = (limit, offset) => {
    const queryParams = `?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash_md5}&limit=${limit}&offset=${offset}`;
    const requestUrl = base_url + endpoint + queryParams;
    return axios.get(requestUrl);
}

export { getCharacters }

// axios.get(requestUrl)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });