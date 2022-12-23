
import axios from "axios";
const Api_key = "9f601206f79006240b2e92657fec046e"


const GetGene = () => {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${Api_key}&language=en-US`)
}

const GetTVSHowpopular = () => {
    return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${Api_key}&language=en-US&page=2`)
}


const Getsearch = (page, keyword) => {

    return axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${Api_key}&language=en-US&page=${page}&include_adult=false&query=${keyword}`)
}
const Getgenres = () => {

    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${Api_key}&language=en-US`)
}

const GetDiscovery = (GenresId, typemove) => {

    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${Api_key}&language=en-US&sort_by=${typemove}&include_adult=false&include_video=false&page=1&with_genres=${GenresId}`)
}


export {


    GetGene, GetTVSHowpopular, Getsearch,
    Getgenres, GetDiscovery
}

