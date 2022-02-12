// import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const BASPATH = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL, largMovies }) {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [showTrailer, setShowTrailer] = useState(false)
  function hamdelMovie(movie) {
    setMovieId("")
    setShowTrailer(!showTrailer)
    if (movie) {
      movieTrailer(movie?.name).then((url) => {
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search)
          setMovieId(urlParams.get('v'));
        }
        console.log(movieId);
      });
    }      // https://developers.google.com/youtube/player_parameters

  }

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchURL]);

  const opts = {
    height: "450",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };


  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="row_content">
        {movies.map((movie) => (
          <div
            onClick={() => {
              hamdelMovie(movie);
            }}
            className={largMovies ? `row_larg_movie` : "row_movie"}
          >
            <img
              key={movie.id}
              src={`${BASPATH}${
                !largMovies ? movie.backdrop_path : movie.poster_path
              }`}
              alt={movie.original_title}
            />
          </div>
        ))}
      </div>
      { showTrailer && <YouTube videoId={movieId} opts={opts} />}
    </div>
  );
}

export default Row;
