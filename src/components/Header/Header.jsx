import headerLogo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import '../Header/header.css'
import HeaderLogin from './HeaderLogin/HeaderLogin';
import HeaderNavBar from './HeaderNavBar/HeaderNavBar';

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      {pathname === '/'} : <HeaderLogin /> ? <HeaderNavBar />
    </header> 


  );
}

export default Header;