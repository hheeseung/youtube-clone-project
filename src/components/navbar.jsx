import React from 'react';
import styles from '../style/navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <p className={styles.home}>
        <i className='fa-solid fa-house'></i>
        <span>Home</span>
      </p>
      <p className={styles.find}>
        <i className='fa-solid fa-compass'></i>
        <span>Find</span>
      </p>
      <p className={styles.subscribe}>
        <i className='fa-solid fa-box-archive'></i>
        <span>subscribe</span>
      </p>
      <p className={styles.mylist}>
        <i className='fa-solid fa-list'></i>
        <span>playlist</span>
      </p>
      <p className={styles.offline}>
        <i className='fa-solid fa-download'></i>
        <span>
          Offline
          <br />
          Download
        </span>
      </p>
    </nav>
  );
};

export default Navbar;
