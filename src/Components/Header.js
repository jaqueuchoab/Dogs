import React from 'react';
import styles from '../Styles/Header.module.css';
import {Link} from  'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header + ' container'}>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login/Criar</Link>
      </nav>
    </div>
  )
}

export default Header;
