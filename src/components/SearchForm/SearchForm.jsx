import React, { useState } from 'react';
import css from './SearchForm.module.css';

export const SearchForm = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form className={css.SearchForm} onSubmit={handleSubmit}>
      <label
        className={css.SearchFormButtonLabel}
        htmlFor="searchInput"
      ></label>

      <input
        className={css.SearchFormInput}
        type="text"
        name="searchInput"
        required
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />

      <button className={css.SearchFormButton} type="submit"></button>
    </form>
  );
};
