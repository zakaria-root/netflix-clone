import axios from "../../axios";
import React, { useEffect, useState } from "react";
import './HeaderMovie.css'
const BASPATH = "https://image.tmdb.org/t/p/w500";


function HeaderMovie({ fetchURL }) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchURL);
      const movieRequest = request.data.results;
      setMovie(movieRequest[Math.floor(Math.random() * movieRequest.length -1 )]);
      console.log(movie)
    }
    fetchMovies();
  }, [fetchURL]);

  return (
    <div className="header_movie">
      <img src={BASPATH + movie.poster_path} alt={movie.original_title} />

    </div>
  );
}

export default HeaderMovie;
