import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const data = await axios.get(fetchUrl);
    setMovies(data.data.results);
    return data;
  }

  useEffect(() => {
    fetchMovies();
  });

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <div className="row_relative" key={movie?.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie?.backdrop_path : movie?.poster_path
              }`}
              alt={movie?.title || movie?.original_title}
              className={`${isLargeRow ? "row_poster" : "row_img"}`}
              loading="lazy"
            />

            <div className="row_abs">
              <h4>{movie?.title || movie?.original_title || movie?.name}</h4>

              <button className="row_button">Play</button>
            </div>
          </div>
        ))}
      </div>

      {console.log(movies)}
    </div>
  );
}

export default Row;
