import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import { useEffect, useState } from 'react';
import { getMovies } from 'service/movies-api';

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesFromApi();
  });

  const fetchMoviesFromApi = () => {
    const response = getMovies();
    console.log(response);
    // setMovies(prevMovies => [...movies, ...response.results]);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home movies={movies} />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </>
  );
};
