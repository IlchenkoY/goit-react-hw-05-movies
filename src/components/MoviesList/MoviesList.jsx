import { List, ListItemImg } from './MoviesList.styled';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import defPoster from '../../default-images/default-img.png';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <ListItemImg
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : defPoster
                }
                alt={title}
              />
              <h2>{title}</h2>
            </Link>
          </li>
        ))}
      </List>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export { MoviesList };
