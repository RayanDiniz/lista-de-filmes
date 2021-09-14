 import axios from "axios";
 const api = axios.create({
     baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=a44c990238d28bc8ab8ef6b429f8b9db&language=pt-BR"
 });
 export default api;