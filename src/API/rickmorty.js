import axios from 'axios';

const KEY = '';


export default axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',

})