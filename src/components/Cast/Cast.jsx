import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'moviesApi';
import { CastList } from './Cast.styled';
import defAvatar from '../../default-images/default-avatar.png';

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(moviesId)
      .then(setCast)
      .catch(e => console.log(e.message));
  }, [moviesId]);

  return (
    <CastList>
      {cast.map(({ cast_id, name, profile_path, character }) => (
        <li key={cast_id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                : defAvatar
            }
            alt={name}
            width="185"
            height="278"
          />
          <span>{name}</span>
          <p>Character: {character}</p>
        </li>
      ))}
    </CastList>
  );
};
export { Cast };
