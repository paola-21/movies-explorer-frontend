import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">
      Портфолио
      </h2>
      <nav>
        <ul className='portfolio__container'>
          <li className='portfolio__list'>
            <a href='https://github.com/paola-21/how-to-learn' target="_blank" className='portfolio__link'>
              Статичный сайт <span>↗</span>
            </a>
          </li>
          <li className='portfolio__list'>
          <a href='https://paola-21.github.io/russian-travel/' target="_blank" className='portfolio__link'>
            Адаптивный сайт <span>↗</span>    
          </a>
          </li>
          <li className='portfolio__list'>
          <a href='https://paola-21.github.io/mesto/' target="_blank" className='portfolio__link'>
            Одностраничное приложение <span>↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Portfolio;
