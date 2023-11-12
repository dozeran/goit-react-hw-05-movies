import MoviesComp from 'components/Movies/MoviesComp';
import { useEffect, useState } from 'react';
import { getMovies } from 'service/movies-api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesFromApi();
  }, []);

  async function fetchMoviesFromApi() {
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Trending today</h1>
      <MoviesComp movies={movies} />
    </>
  );
};

export default Home;
