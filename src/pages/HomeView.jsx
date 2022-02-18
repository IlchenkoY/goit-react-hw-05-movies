import { useState, useEffect } from 'react';
import { PageHeading } from '../components/PageHeading/PageHeading';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'moviesApi';

const HomeView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(setMovies)
      .catch(e => console.log(e.message));
  }, []);

  return (
    <>
      <PageHeading text="Trending movies" />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
export { HomeView };
