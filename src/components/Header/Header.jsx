import headerLogo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import '../Header/header.css'
import HeaderLogin from './HeaderLogin/HeaderLogin';

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="header__container">
      <img className="header__logo" src={headerLogo} alt="Логотип" /> 
      { pathname === '/' && <HeaderLogin />}
      </div>
    </header>

  );
}

export default Header;


{/* <header className="header">
<div className="header__container">
  <div className="header__body">
    <img className="header__logo" src={headerLogo} alt="Логотип" /> 
    <div className="header__burger">
      <span> </span>  
    </div>
    <nav className="header__menu">
      <ul className="header__list">
        <li>
          <Link className="header__link"> 
          </Link>
        </li>
        <li>
          <Link className="header__link"></Link>
        </li>
      </ul>
    </nav>
    <div className="header__profile">
      <Link className="header__profile_register" to='signup'>Регистрация</Link>
      <Link className="header__profile_login" to='signin'>Войти</Link>
    </div>
  </div> 
</div>
</header> */}
