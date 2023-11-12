import { useSearchParams } from 'react-router-dom';
import MoviesComp from 'components/Movies/MoviesComp';
import { getMoviesByQuery } from 'service/movies-api';
import { useEffect, useState } from 'react';
import Form from 'components/Form/Form';

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

  return (
    <>
      <Form
        setSearchParams={setSearchParams}
        fetchMoviesFromApi={fetchMoviesFromApi}
      />
      <MoviesComp movies={movies} />
    </>
  );
};

export default Movies;
