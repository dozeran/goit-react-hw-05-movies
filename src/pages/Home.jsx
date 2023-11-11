import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'service/movies-api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;