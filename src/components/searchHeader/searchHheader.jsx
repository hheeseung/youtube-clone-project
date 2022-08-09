import React from 'react';
import {useRef} from 'react';
import styles from './searchHeader.module.css';

const SearchHeader = ({onSearch}) => {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    onSearch(value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftside}>
        <span className={styles.bars}>
          <i className='fa-solid fa-bars'></i>
        </span>
        <span className={styles.icon}>
          <i className='fa-brands fa-youtube'></i>
        </span>
        <span className={styles.title}>YouTube</span>
      </div>
      <form className={styles.search} onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type='text'
          placeholder='검색'
          className={styles.search__input}
        />
        <button className={styles.search__btn}>
          <i className='fa-solid fa-magnifying-glass'></i>
        </button>
      </form>
      <div className={styles.rightside}>
        <span className={styles.upload}>
          <i className='fa-solid fa-square-plus'></i>
        </span>
        <span className={styles.alert}>
          <i className='fa-solid fa-bell'></i>
        </span>
        <span className={styles.profile}>
          <i className='fa-solid fa-user'></i>
        </span>
      </div>
    </header>
  );
};

export default SearchHeader;
