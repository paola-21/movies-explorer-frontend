import './Portfolio.css';
import button from '../../../images/button.svg';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">
      Портфолио
      </h2>
      <div className='portfolio__container'>
        <h3 className='portfolio__subtitle'>
        Статичный сайт
        </h3>
        <button className='portfolio__button'>
        ↗
        </button>
        <h3 className='portfolio__subtitle'>
        Адаптивный сайт
        </h3>
        <button className='portfolio__button'>
        ↗
        </button>
        <h3 className='portfolio__subtitle'>
        Одностраничное приложение
        </h3>
        <button className='portfolio__button'>
        ↗
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
