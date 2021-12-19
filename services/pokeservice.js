import axios from "axios";

const clientApiService = axios.create({
    baseURL:'https://pokeapi.co/api/v2',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-type': 'application/json',
    }
})
export default{
    getPokeDex(){
        return clientApiService.get('/pokemon?offset=0&limit=150')
    },
    getPokeDexPic(id){
        return clientApiService.get('/pokemon/'+ id)
    },
}