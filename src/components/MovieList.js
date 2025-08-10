import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="row">
      {movies.map((movie, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
