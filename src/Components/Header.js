import React from 'react';
import styles from '../Styles/Header.module.css';
import {Link} from 'react-router-dom';
// Importando svg
import {ReactComponent as Dogs} from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  console.log(data);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? 
        (<div>
          <Link className={styles.login} to='/conta'>{data.nome}</Link>
          <button onClick={userLogout}>SAIR</button>
        </div>) : 
        (<Link className={styles.login} to='/login'>Login/Criar</Link>)
        }
      </nav>
    </header>
  )
}

export default Header;
