// import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../axios";

const BASPATH = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchURL }) {
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
          <div className="row_movie">
            <img src={BASPATH + movie.poster_path} alt={movie.original_title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
