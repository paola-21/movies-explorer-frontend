import headerLogo from "../../images/logoHeader.svg";
import { Link } from "react-router-dom";
import '../Header/header.css'

function Header({ movies, moviesLink, moviesText, saved, savedLink, savedText, 
  register, registerLink, registerText, login, loginLink, loginText}) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <h2 className="header__title" onClick={movies}>
        <Link className="header__link" to={moviesLink}>
          {moviesText}
        </Link>
      </h2>
      <h2 className="header__title" onClick={saved}>
        <Link className="header__link" to={savedLink}>
          {savedText}
        </Link>
      </h2>
      <h2 className="header__title" onClick={register}>
        <Link className="header__link" to={registerLink}>
          {registerText}
        </Link>
      </h2>
      <h2 className="header__title-login" onClick={login}>
        <Link className="header__link-login" to={loginLink}>
          {loginText}
        </Link>
      </h2>
    </header>
  );
}

export default Header;
