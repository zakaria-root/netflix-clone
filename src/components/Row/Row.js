// import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../axios";

const BASPATH = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchURL, largMovies }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="row_content">
        {movies.map((movie) => (
          <div className={largMovies ? `row_larg_movie` : "row_movie"}>
            <img
              key={movie.id}
              src={
              `${BASPATH}${!largMovies ? movie.backdrop_path : movie.poster_path}`
              }
              alt={movie.original_title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
