import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/51s+z1ZzY-L._AC_.jpg",
      rating: 5,
    },
    {
      title: "Stranger Things",
      description: "A sci-fi series set in the 80s.",
      posterURL:
        "https://m.media-amazon.com/images/I/81w+3k4U5-L._AC_SL1500_.jpg",
      rating: 4,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">🎬 My Movie App</h1>
      <Filter
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
        onAddMovie={handleAddMovie}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;



