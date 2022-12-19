
import axios from "axios";
const Api_key = "9f601206f79006240b2e92657fec046e"

const Getmovepopular = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`)
}
const GetGene = () => {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${Api_key}&language=en-US`)
}

const GetTVSHowpopular = () => {
    return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${Api_key}&language=en-US&page=2`)
}
const Getmovefeatured = () => {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${Api_key}`)
}

const Getmoveupcoming = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`)
}



export {


    Getmovepopular, GetGene, GetTVSHowpopular, Getmovefeatured, Getmoveupcoming
}

