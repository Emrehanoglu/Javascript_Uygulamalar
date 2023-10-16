//api : 6d9af7eb0d7736059df4416cfff81db0
//url : https://api.themoviedb.org/3
//https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1

import Search from "./models/Search";

const search = new Search('abc')

console.log(search)

search.getMovie()