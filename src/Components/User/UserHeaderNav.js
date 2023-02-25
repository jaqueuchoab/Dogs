import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import style from '../../Styles/StylesUser/UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [module, setModule] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={style.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos />
        {module && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/statistics">
        <Statistics />
        {module && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/post">
        <AddPhoto />
        {module && 'Adicionar Fotos'}
      </NavLink>
      <button onClick={userLogout}> 
        <Sair />
        {module && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
