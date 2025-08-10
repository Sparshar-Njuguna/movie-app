import React, { useState } from "react";

function Filter({ setFilterTitle, setFilterRating, onAddMovie }) {
  const [titleInput, setTitleInput] = useState("");
  const [ratingInput, setRatingInput] = useState("");
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleAdd = () => {
    if (!newMovie.title || !newMovie.posterURL) return;
    onAddMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <div className="mb-4">
      {/* Filter Section */}
      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Filter by title"
          className="form-control"
          value={titleInput}
          onChange={(e) => {
            setTitleInput(e.target.value);
            setFilterTitle(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Min rating"
          className="form-control"
          value={ratingInput}
          onChange={(e) => {
            setRatingInput(e.target.value);
            setFilterRating(Number(e.target.value));
          }}
        />
      </div>

      {/* Add Movie Section */}
      <div className="d-flex gap-2">
        <input
          type="text"
          placeholder="Title"
          className="form-control"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="form-control"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Poster URL"
          className="form-control"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Rating"
          className="form-control"
          value={newMovie.rating}
          onChange={(e) =>
            setNewMovie({ ...newMovie, rating: Number(e.target.value) })
          }
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Filter;

