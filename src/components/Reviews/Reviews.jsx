import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesByRewiews } from 'service/movies-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const fetchReviewsById = useCallback(async () => {
    try {
      const reviewsList = await getMoviesByRewiews(movieId);
      setReviews(reviewsList);
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchReviewsById();
  }, [fetchReviewsById]);

  return (
    <ul>
      {reviews && reviews.length > 0 ? (
        reviews.map(({ author, content, created_at }) => (
          <li key={created_at}>
            <p>
              <b>Author: {author}</b>
            </p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;
