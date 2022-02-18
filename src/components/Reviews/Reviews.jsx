import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'moviesApi';

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(moviesId)
      .then(setReviews)
      .catch(e => console.log(e.message));
  }, [moviesId]);

  return Boolean(reviews.length) ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};
export { Reviews };
