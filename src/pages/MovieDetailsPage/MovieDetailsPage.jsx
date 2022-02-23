import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { getMovieDetailsById } from 'moviesApi';
import {
  MovieCard,
  MovieCardDesc,
  MovieCardLink,
  MovieCardLinkList,
  MovieCardLinkItem,
} from './MovieDetailsPage.styled';
import defPoster from '../../default-images/default-img.png';

const MovieDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { moviesId } = useParams();
  const [movie, setmovie] = useState(null);

  useEffect(() => {
    getMovieDetailsById(moviesId)
      .then(setmovie)
      .catch(e => console.log(e.message));
  }, [moviesId]);

  const onGoBack = () => {
    location?.state?.from ? navigate(-1) : navigate('/');
  };

  return (
    <>
      <IoMdArrowRoundBack
        type="button"
        style={{ width: 35, height: 35, color: 'rgb(44, 44, 44)' }}
        onClick={onGoBack}
      ></IoMdArrowRoundBack>
      {movie && (
        <MovieCard>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defPoster
            }
            alt={movie.title}
            width="342"
            height="513"
          />
          <MovieCardDesc>
            <h1>
              {movie.title} ({movie.release_date.substring(0, 4)})
            </h1>
            <p>Users score: {movie.vote_average}</p>
            <p>
              <b>Overview:</b>
            </p>
            <p>{movie.overview}</p>
            <p>
              <b>Genres:</b>
            </p>
            <p>
              {movie.genres.reduce((acc, { name }) => `${acc} ${name}`, '')}
            </p>
          </MovieCardDesc>
        </MovieCard>
      )}

      <MovieCardLinkList>
        <MovieCardLinkItem>
          <MovieCardLink to="cast" state={{ from: location }}>
            Cast
          </MovieCardLink>
        </MovieCardLinkItem>
        <MovieCardLinkItem>
          <MovieCardLink to="reviews" state={{ from: location }}>
            Reviews
          </MovieCardLink>
        </MovieCardLinkItem>
      </MovieCardLinkList>
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
