//api : 6d9af7eb0d7736059df4416cfff81db0
//url : https://api.themoviedb.org/3
//https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1

async function getMovie(keyword){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDlhZjdlYjBkNzczNjA1OWRmNDQxNmNmZmY4MWRiMCIsInN1YiI6IjY1MmQ2Y2E2MDI0ZWM4MDEwMTUzMWZhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HaFx5bCQEQiQEKTRS8UY8meGQrpb2_gjPuVytMorE-I'
    }
  };
  
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`, options)
  const data = await response.json()
  console.log(data.results[0].id)
}

getMovie('abc')
