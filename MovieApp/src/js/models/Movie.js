//class olduğu için baş harfi büyük
export class Movie{
    constructor(id){
        this.id = id
    }

    async getDetails() {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDlhZjdlYjBkNzczNjA1OWRmNDQxNmNmZmY4MWRiMCIsInN1YiI6IjY1MmQ2Y2E2MDI0ZWM4MDEwMTUzMWZhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HaFx5bCQEQiQEKTRS8UY8meGQrpb2_gjPuVytMorE-I'
            }
          };
          
          const response = await fetch(`https://api.themoviedb.org/3/movie/${this.id}?language=en-US`, options)
          this.data = await response.json()
          console.log(this.data)
    }

}
