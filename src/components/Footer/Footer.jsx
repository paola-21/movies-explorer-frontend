import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <h2 className="footer__title">
      Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__container'>
        <h3 className="footer__data">
        &#174; 2020
        </h3>
        <nav>
          <ul className='footer__navbar'>
            <li className='footer__link'>
              <a className="footer__link" href='/#'>
              Яндекс.Практикум
              </a> 
            </li>
            <li className='footer__link'>
              <a className="footer__link" href='/#'>
              Github
              </a> 
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
