import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SerchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { LoaderSpinner } from 'components/Loader';
import { getMoviesByKeywords } from 'moviesApi';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const handleFormSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    getMoviesByKeywords(query).then(response => {
      setMovies(response);
      setLoading(false);
    });
  }, [query]);
  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {loading ? <LoaderSpinner /> : <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
