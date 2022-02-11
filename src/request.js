const APIKEY = '892b996bc50973fd22f5a3d14b143b4a'

const request  = {
     fetchTrending :  `/trending/all/week?api_key=${APIKEY}&language=en-US`,
     fetchNetflixOriginals : `/discover/tv?api_key=${APIKEY}&with_networks=213`,
     fetchComedyMovies : `/discover/movie?api_key=${APIKEY}&with_genres=35`,
     fetchActionMovies : `/discover/movie?api_key=${APIKEY}&with_genres=28`,
     fetchHorrorMovies : `/discover/movie?api_key=${APIKEY}&with_genres=27`,
     fetchRomanceMovies : `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
     fetchTopReader: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
     fetchDocumentaries : `/discover/movie?api_key=${APIKEY}&with_genres=99`
}

export default request
