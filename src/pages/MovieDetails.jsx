import MovieDetailsComp from 'components/MovieDetails/MovieDetailsComp';
import { useCallback, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMoviesById } from 'service/movies-api';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const fetchMoviesById = useCallback(async () => {
    try {
      const movieDetails = await getMoviesById(movieId);
      setMovie(movieDetails);
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMoviesById();
  }, [fetchMoviesById]);

  return (
    <>
      <MovieDetailsComp
        poster={movie.poster_path}
        title={movie.title}
        releaseDate={movie.release_date}
        voteAvarage={movie.vote_average}
        overview={movie.overview}
        genres={movie.genres}
      />
      <Outlet />
    </>
  );
};

export default MovieDetails;
