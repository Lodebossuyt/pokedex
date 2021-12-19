import axios from "axios";

const clientApiService = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
    }
})

export default{
    Pokemons(){
      return clientApiService.get('/pokemon/?offset=0&limit=150')
    },
}