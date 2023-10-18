//Uygulama boyunca kullanacak olduğum elementleri buradan çağırıyor olucam.
export const elements = {
    searchForm:  document.getElementById('form-search'),
    searchInput: document.getElementById('txt-keyword'),
    movieList: document.getElementById('movie-list'),
    movieListContainer: document.getElementById('movie-list-container'),
    movieListHeader: document.getElementById('movie-list-header'),
    movieDetails: document.getElementById('movie-details'),
    movieDetailsContainer: document.getElementById('movie-details-container'),
    movieDetailsClose: document.getElementById('movie-details-close')
}

export const renderLoading = parent => {
  const loader = ` <div class="nb-spinner"></div>`
  parent.insertAdjacentHTML('beforebegin',loader)
}
export const clearLoader = parent => {
  const loader = parent.previousSibling
  if(loader){
    loader.parentNode.removeChild(loader) //loader in bir üst elemanına çıkarak kendisini sildim.
  }
}

export const image_sizes = {
    backdrop_sizes: [
        "w300",
        "w780",
        "w1280",
        "original"
      ],
      logo_sizes: [
        "w45",
        "w92",
        "w154",
        "w185",
        "w300",
        "w500",
        "original"
      ],
      poster_sizes: [
        "w92",
        "w154",
        "w185",
        "w342",
        "w500",
        "w780",
        "original"
      ],
      profile_sizes: [
        "w45",
        "w185",
        "h632",
        "original"
      ],
      still_sizes: [
        "w92",
        "w185",
        "w300",
        "original"
      ]
}