import React, { ChangeEvent, MouseEvent, KeyboardEvent, useState } from 'react';
import styles from './search_header.module.css';

type SearchProps = {
  onSearch: (text: string) => void;
};

const SearchHeader = ({ onSearch }: SearchProps) => {
  const [text, setText] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    e.code === 'Enter' && text && onSearch(text);
  };

  const handleSearch = (e: MouseEvent): void => {
    text && onSearch(text);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input className={styles.input} type="search" value={text || ''} onChange={handleChange} onKeyPress={handleKeyPress} placeholder="Search..." />
      <button className={styles.button} type="submit" onClick={handleSearch}>
        {/*onClick={handleSearch}>search</button>*/}
        <img className={styles.buttonImg} src="/images/search.png" alt="search" />
      </button>
    </header>
  );
};

export default SearchHeader;
