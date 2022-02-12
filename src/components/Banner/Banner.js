import axios from "../../axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
const BASPATH = "https://image.tmdb.org/t/p/original";

function HeaderMovie({ fetchURL }) {
  const [movie, setMovie] = useState({});
  const PATH = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchURL);
      const movieRequest = request.data.results;
      setMovie(
        movieRequest[Math.floor(Math.random() * movieRequest.length - 1)]
      );
      console.log(movie);
    }
    fetchMovies();
  }, [fetchURL]);

  const truncate = (input, n) => {
    
    if (input?.length > n ) {
      return `${input.substr(0, n-1)}...`
    }
    return  input;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${PATH})`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner_contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="button_banner_section">
          <button className="button_banner">Play</button>
          <button className="button_banner">My List</button>
        </div>
        <h1 className="banner_discrih1tion"> {truncate(movie.overview, 150)} </h1>
      </div>
      <div className="banner_bottom"></div>
    </header>
  );
}

export default HeaderMovie;
