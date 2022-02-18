import { useState, useEffect } from 'react';
import { SearchForm } from 'components/SerchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { LoaderSpinner } from 'components/Loader';
import { getMoviesByKeywords } from 'moviesApi';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
  };

  useEffect(() => {
    if (!searchQuery) return;
    setLoading(true);
    getMoviesByKeywords(searchQuery).then(response => {
      setMovies(response);
      setLoading(false);
    });
  }, [searchQuery]);
  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {loading ? <LoaderSpinner /> : <MoviesList movies={movies} />}
    </>
  );
};

export { Movies };
