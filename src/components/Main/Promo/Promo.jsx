import './Promo.css';
import { Link } from 'react-router-dom';

function Promo() {
  return (
    <div className="promo">
      <div className='promo__container'>
        <h2 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
        </h2>
        <nav>
          <ul className='promo__grid'>
            <li className='promo__nav'>
              <Link className='promo__link' to="/#project" reloadDocument >О проекте</Link>
            </li>
            <li className='promo__nav'>
              <Link className='promo__link' to="/#techs" reloadDocument>Технологии</Link>
            </li>
            <li className='promo__nav'>
              <Link className='promo__link' to="/#aboutMe" reloadDocument >Студент</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Promo;
