import { useSearchParams } from 'react-router-dom';
import MoviesComp from 'components/Movies/MoviesComp';
import { getMoviesByQuery } from 'service/movies-api';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  async function fetchMoviesFromApi(searchQuery) {
    try {
      const moviesFounded = await getMoviesByQuery(searchQuery);
      setMovies(moviesFounded);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (query) fetchMoviesFromApi(query);
  }, [query]);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.query.value;
    setSearchParams({ query: searchQuery });
    form.reset();
    fetchMoviesFromApi(searchQuery);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <MoviesComp movies={movies} />
    </>
  );
};

export default Movies;
