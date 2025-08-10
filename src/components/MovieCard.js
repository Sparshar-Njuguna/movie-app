import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="card h-100">
      <img
        src={movie.posterURL}
        className="card-img-top"
        alt={movie.title}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <p className="card-text">
          <strong>Rating:</strong> ⭐ {movie.rating}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;

