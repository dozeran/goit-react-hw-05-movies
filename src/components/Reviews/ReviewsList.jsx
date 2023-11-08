import React from 'react';

const ReviewsList = ({ reviews }) => {
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

export default ReviewsList;
