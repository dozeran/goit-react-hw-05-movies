import { Link } from 'react-router-dom';
import css from './MovieDetailsComp.module.css';

const MovieDetailsComp = ({
  poster,
  title,
  releaseDate,
  voteAvarage,
  overview,
  genres,
}) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <>
      <div className={css.mainInfo}>
        <div>
          <img
            src={
              poster ? `https://image.tmdb.org/t/p/w500/${poster}` : defaultImg
            }
            width={250}
            alt={title}
          />
        </div>
        <div>
          <h2>
            {title} ({releaseDate ? releaseDate.slice(0, 4) : null})
          </h2>
          <p>User Score: {Math.round(voteAvarage * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default MovieDetailsComp;
