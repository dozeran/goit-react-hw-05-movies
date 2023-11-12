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

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <div>
      {actors && actors.length > 0 ? (
        actors.map(({ id, profile_path, name, character }) => {
          return (
            <div key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                width={150}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </div>
          );
        })
      ) : (
        <p>We don't have any cast for this movie.</p>
      )}
    </div>
  );
};

export default Cast;
