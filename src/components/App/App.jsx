import Header from '../Header/Header';
import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import AboutMe from '../Main/AboutMe/AboutMe';
import Techs from '../Main/Techs/Techs';
import Portfolio from '../Main/Portfolio/Portfolio';

import './App.css'

function App() {
  return (
    <div className="App">
      <div className='app__container'>
        <Header 
            movies={""}
            moviesLink={""}
            moviesText={"Фильмы"}
            saved={""}
            savedLink={""}
            savedText={"Сохраненные фильмы"}
            register={""}
            registerLink={""}
            registerText={"Регистрация"}
            login={""}
            loginLink={""}
            loginText={"Войти"}
        />
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
