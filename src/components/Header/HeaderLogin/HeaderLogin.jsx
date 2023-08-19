import { Link } from "react-router-dom";
import headerLogo from "../../../images/logo.svg";
import './HeaderLogin.css'

function Header() {

    return (
        <div className="header">
        <div className="header__body-profile">
        <Link className="header__logo-profile" to='/'><img className="header__logo" src={headerLogo} alt="Логотип" /> </Link>
          <nav className="header__profile">
            <Link className="header__profile_register" to='signup'>Регистрация</Link>
            <Link className="header__profile_login" to='signin'>Войти</Link>
          </nav>
        </div> 
      </div>
  );
}

export default Header;
