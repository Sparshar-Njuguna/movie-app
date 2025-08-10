import React, { useState } from "react";

function Filter({ setFilterTitle, setFilterRating, onAddMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: name === "rating" ? Number(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <div className="mb-4">
      <h4>🔍 Filter Movies</h4>
      <div className="d-flex gap-3 mb-3">
        <input
          type="text"
          placeholder="Filter by title"
          className="form-control"
          onChange={(e) => setFilterTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum rating"
          className="form-control"
          onChange={(e) => setFilterRating(Number(e.target.value))}
        />
      </div>

      <h4>➕ Add New Movie</h4>
      <form onSubmit={handleSubmit} className="row g-2">
        <div className="col-md-3">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="form-control"
            value={newMovie.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="form-control"
            value={newMovie.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="posterURL"
            placeholder="Poster URL"
            className="form-control"
            value={newMovie.posterURL}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            className="form-control"
            value={newMovie.rating}
            onChange={handleChange}
            required
            min="0"
            max="5"
          />
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-primary w-100">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Filter;

