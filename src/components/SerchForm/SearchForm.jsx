import { useState } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { Form, SearchButton, SearchInput } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNameChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return toast.warn('🦄 Enter valid query!');
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <FcSearch style={{ marginTop: 4, width: 25, height: 25 }} />
        </SearchButton>

        <SearchInput
          type="text"
          name="searchQuery"
          autocomplete="off"
          placeholder="Search movie"
          value={searchQuery}
          onChange={handleNameChange}
        />
      </Form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { SearchForm };
