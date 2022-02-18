import { List, ListItemImg } from './MoviesList.styled';
import { Link } from 'react-router-dom';
import defPoster from '../../default-images/default-img.png';

const MoviesList = ({ movies }) => {
  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
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

export { MoviesList };
