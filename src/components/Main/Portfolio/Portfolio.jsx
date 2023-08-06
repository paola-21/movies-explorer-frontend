import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">
      Портфолио
      </h2>
      <nav>
        <ul className='portfolio__container'>
          <li className='portfolio__grid'>
            <h3 className='portfolio__subtitle'>
            Статичный сайт
            </h3>
            <button className='portfolio__button'>
            ↗
            </button>
          </li>
          <li className='portfolio__grid'>
            <h3 className='portfolio__subtitle'>
            Адаптивный сайт
            </h3>
            <button className='portfolio__button'>
            ↗
            </button>
          </li>
          <li className='portfolio__grid'>
            <h3 className='portfolio__subtitle'>
            Одностраничное приложение
            </h3>
            <button className='portfolio__button'>
            ↗
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Portfolio;
