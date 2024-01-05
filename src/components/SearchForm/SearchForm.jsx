import React from 'react';
import css from './SearchForm.module.css';

export const SearchForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchInput.value;
    console.log(searchValue);
  };

  return (
    <form className={css.SearchForm} onSubmit={handleSubmit}>
      <label
        className={css.SearchFormButtonLabel}
        htmlFor="searchInput"
      ></label>

      <input className={css.SearchFormInput} type="text" name="searchInput" />
      <button className={css.SearchFormButton} type="submit"></button>
    </form>
  );
};
