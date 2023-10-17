//api : 6d9af7eb0d7736059df4416cfff81db0
//url : https://api.themoviedb.org/3
//https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1

import Search from "./models/Search";
import {elements} from "./base";
import * as searchView from './views/searchView'
import { Movie } from "./models/Movie";

const state = {}

//Search Controller

const searchController = async () => {
    const keyword = elements.searchInput.value
    if(keyword){
        state.search = new Search(keyword)

        await state.search.getMovie()
        searchView.clearInputs()
        searchView.clearResults()
        searchView.displayResults(state.search.data)
        console.log(state.search.data)
    }else{
        alert('Anahtar Kelime Girmelisiniz')
    }
}

elements.searchForm.addEventListener('submit',function(e){
    searchController()
    e.preventDefault(); //submit özelliğini kapattım yani sayfa refresh edilmeyecek.
})

//Movie Controller

const movie = new Movie(948420)
movie.getDetails()