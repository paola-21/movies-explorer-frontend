import { Link } from "react-router-dom";
import headerLogo from "../../../images/logo.svg";
import './HeaderNavBar.css'

function HeaderNavBar() {

    function handleBurger() {
        const burger = document.querySelector('.header__burger');
        if (burger) {
          const headerMenu = document.querySelector('.header__menu');
          const menuTransparent = document.querySelector('.header__menu-no-transparent');
          burger.classList.toggle('header__burger_active');
          headerMenu.classList.toggle('header__menu__active');
          menuTransparent.classList.toggle('header__menu-transparent');
        }
      }

    return (
        <div className="header">
        <div className="header__body">
        <Link className="header__logo-link" to='/'><img className="header__logo" src={headerLogo} alt="Логотип" /> </Link>
          <div className="header__burger" onClick={handleBurger}>
            <span></span>  
          </div>
          <div className="header__menu-no-transparent">
            <img className="header__menu-no-transparent__logo" src={headerLogo} alt="Логотип" />
            </div>
          <nav className="header__menu">
            <ul className="header__list">
              <li className="header__link">
                <Link className="header__link-text" to='/'> Главная
                </Link>
              </li>
              <li className="header__link">
                <Link className="header__link-text" to='/movies'> Фильмы
                </Link>
              </li>
              <li className="header__link">
                <Link className="header__link-text" to='/saved-movies'>Сохранённые фильмы</Link>
              </li>
            </ul>
            <Link className="header__account" to='/profile'>Аккаунт</Link>
          </nav>
        </div> 
      </div>
  );
}

export default HeaderNavBar;