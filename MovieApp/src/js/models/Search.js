//Search sınıfından bir nesne türetildiği zaman içerisinde keyword gönderilecek
export default class Search{
    constructor(keyword){
        this.keyword = keyword
    }

    async getMovie(){
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDlhZjdlYjBkNzczNjA1OWRmNDQxNmNmZmY4MWRiMCIsInN1YiI6IjY1MmQ2Y2E2MDI0ZWM4MDEwMTUzMWZhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HaFx5bCQEQiQEKTRS8UY8meGQrpb2_gjPuVytMorE-I'
          }
        };
        
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${this.keyword}&include_adult=false&language=en-US&page=1`, options)
        this.data = await response.json()
        /* console.log(this.data.results) */
      }      
}