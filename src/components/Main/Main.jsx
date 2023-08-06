import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import AboutMe from './AboutMe/AboutMe';
import Techs from './Techs/Techs';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
// import Header from '../Header/Header';

function Main() {
  return (
    <div className="App">
      <div className='app__container'>
        {/* <Header /> */}
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default Main;
