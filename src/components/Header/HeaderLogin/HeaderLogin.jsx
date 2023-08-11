import { Link } from "react-router-dom";
import './HeaderLogin.css'

function Header() {

    return (
        <div className="header__body">
            <Link className="header__profile_register" to='signup'>Регистрация</Link>
            <Link className="header__profile_login" to='signin'>Войти</Link>
        </div> 
  );
}

export default Header;
