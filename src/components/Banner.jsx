import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import Request from "../Request";

function Banner() {
  const [movie, setMovie] = useState([]);

  async function fetch() {
    const data = await axios.get(Request.fetchTrending);
    setMovie(
      data.data.results[
        Math.floor(Math.random() * data.data.results.length - 1)
      ]
    );
  }
  useEffect(() => {
    fetch();
  }, []);

  function truncate(sentence, n) {
    return sentence.length > n ? sentence.substr(0, n - 1) + "..." : sentence;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || "/aWPhMZ0P2DyfWB7k5NXhGHSZHGC.jpg"
        }")`,
        backgroundSize: "cover",
        backgroundPosition: "top center ",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My list</button>
        </div>
        <p className="banner_description">
          {truncate(movie?.overview || "Movie description", 200)}
        </p>
      </div>

      <div className="banner_fade" />
    </header>
  );
}

export default Banner;
