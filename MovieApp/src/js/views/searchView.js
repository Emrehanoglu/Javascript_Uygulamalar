//Kullanıcıya önyüzde göstereceğim html yapısını kuracağım kısım.
import {elements} from "../base";

export const clearInputs = () => {
    elements.searchInput.value = '';
}
export const clearResults = () => {
    elements.movieList.value = '';
}
export const displayResults = (keyword,data) =>{
    data.results.forEach(movie => {
        const html = `
            <li class="media mb-3">
                <img src="https://www.themoviedb.org/t/p/w92/${movie.poster_path}" onerror="this.src='https://placehold.co/92x138';" class="mr-3" alt="${movie.title}">
                <div class="media-body">
                    <h5 class="mt-0 mb-1">
                        <span class="badge badge-primary">${movie.vote_average}</span>
                        <a href="#${movie.id}">${movie.title}</a>
                    </h5>
                    <p>${movie.overview}</p>
                </div>
            </li>
        `

        elements.movieListHeader.innerHTML = `${keyword} aramasında ${data.total_results} adet sonuç bulundu.`
        elements.movieListContainer.classList.add("d-block")
        elements.movieList.insertAdjacentHTML('beforeend',html)
    })
}