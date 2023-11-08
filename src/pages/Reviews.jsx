import ReviewsList from 'components/Reviews/ReviewsList';
import React, { useCallback, useEffect, useState } from 'react';
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
  return <ReviewsList reviews={reviews} />;
};

export default Reviews;
