import { SearchForm } from 'components/SearchForm/SearchForm';
import css from './Searchbar.module.css';

export const Searchbar = () => {
  return (
    <div className={css.Searchbar}>
      <SearchForm />
    </div>
  );
};
