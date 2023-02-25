import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import style from '../../Styles/StylesUser/UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const {pathname} = location;

    switch(pathname) {
      case '/conta/post':
        setTitle('Postar');
        break;
      case '/conta/statistics':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);

  return (
    <header className={style.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader;
