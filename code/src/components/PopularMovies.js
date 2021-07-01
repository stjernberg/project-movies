import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { POPULAR_URL } from "../urls";
import { MoviePoster } from "./MoviePoster";
import "../styles/MovieList.css";

export const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(POPULAR_URL)
      .then((response) => response.json())
      .then((json) => setMovies(json.results));
  }, []);

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>We Exist</title>
        <meta
          name="description"
          content="We Exist är ett rekryteringsbolag som hjälper ditt företag attrahera, rekrytera och behålla kvinnliga
       medarbetare inom tech och it."
        />
        <meta property="og:title" content="We Exist" />
        <meta
          property="og:description"
          content="We Exist är ett rekryteringsbolag som hjälper ditt företag attrahera, rekrytera och behålla kvinnliga
       medarbetare inom tech och it."
        />
        <meta
          property="og:image"
          content="https://images.pickapic.live/get/b2cc8a22-6775-8053-0ade-15958857becc-1622710089.png"
        />
      </Helmet>
      <section className="movies-list">
        {movies.map((movie) => (
          <MoviePoster key={movie.id} {...movie} />
        ))}
      </section>
    </>
  );
};
