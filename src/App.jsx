import React from "react";
import Movie from "./Pages/Movie";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/moviedetails/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default App;
