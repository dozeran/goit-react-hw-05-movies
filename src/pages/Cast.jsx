import CastList from 'components/Cast/CastList';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesByCast } from 'service/movies-api';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  const fetchActorsById = useCallback(async () => {
    try {
      const castList = await getMoviesByCast(movieId);
      setActors(castList);
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchActorsById();
  }, [fetchActorsById]);

  return <CastList actors={actors} />;
};

export default Cast;
