import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import style from '../../Styles/StylesUser/UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';


const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [menuMobile, setMenuMobile] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMenuMobile(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${style.mobileButton} ${menuMobile && style.mobileButtonActive}`}
          onClick={() => setMenuMobile(!menuMobile)}
        ></button>
      )}
      <nav className={`${mobile ? style.navMobile : style.nav} ${menuMobile && style.navMobileActive}`}>
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/conta/statistics">
          <Statistics />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/post">
          <AddPhoto />
          {mobile && 'Adicionar Fotos'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
