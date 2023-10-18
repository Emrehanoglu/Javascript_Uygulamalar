//api : 6d9af7eb0d7736059df4416cfff81db0
//url : https://api.themoviedb.org/3
//https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1

import Search from "./models/Search";
import {elements,renderLoading,clearLoader} from "./base";
import * as searchView from './views/searchView'
import * as movieView from './views/movieView'
import { Movie } from "./models/Movie";

const state = {}

//Search Controller

const searchController = async () => {
    const keyword = elements.searchInput.value
    if(keyword){
        state.search = new Search(keyword)
        
        searchView.clearInputs()
        searchView.clearResults()

        renderLoading(elements.movieListContainer)

        await state.search.getMovie()
        searchView.displayResults(keyword,state.search.data)
        setTimeout(()=>{
            clearLoader(elements.movieListContainer)
        },1000) 
    }else{
        alert('Anahtar Kelime Girmelisiniz')
    }
}

elements.searchForm.addEventListener('submit',function(e){
    searchController()
    e.preventDefault(); //submit özelliğini kapattım yani sayfa refresh edilmeyecek.
})

//Movie Controller
const movieController = async () => {
    const id = window.location.hash.replace('#','') //id bilgisi # ile birlikte getiriyordu, replace ile # olan yer gelmiyor 
    if(id){
        state.movie = new Movie(id)

        renderLoading(elements.movieDetailsContainer)

        await state.movie.getDetails()
        movieView.backToTop()
        movieView.movieDetails(state.movie.data)
        
        setTimeout(()=>{
            clearLoader(elements.movieDetailsContainer)
        },1000) 
    }
}
window.addEventListener("hashchange", movieController);
elements.movieDetailsClose.addEventListener('click',movieView.closeDetails)