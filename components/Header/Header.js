import headerLogo from "../images/logoHeader.svg";
import { Link } from "react-router-dom";

function Header({ movies, moviesLink, moviesText, saved, savedLink, savedText, 
  register, registerLink, registerText, login, loginLink, loginText}) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <h2 className="header__movies" onClick={movies}>
        <Link className="header__movies_link" to={moviesLink}>
          {moviesText}
        </Link>
      </h2>
      <h2 className="header__saved" onClick={saved}>
        <Link className="header__saved_link" to={savedLink}>
          {savedText}
        </Link>
      </h2>
      <h2 className="header__register" onClick={register}>
        <Link className="header__register_link" to={registerLink}>
          {registerText}
        </Link>
      </h2>
      <h2 className="header__login" onClick={login}>
        <Link className="header__login_link" to={loginLink}>
          {loginText}
        </Link>
      </h2>
    </header>
  );
}

export default Header;
