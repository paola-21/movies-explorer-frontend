import './AboutMe.css';
import photoStudent from '../../../images/foto.svg';

function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me__title">
      Студент
      </h2>
      <div className='about-me__container'>
        <h3 className='about-me__name'>
        Виталий
        </h3>
        <h4 className='about-me__subtitle'>
        Фронтенд-разработчик, 30 лет
        </h4>
        <h4 className='about-me__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года 
            работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься 
            фриланс-заказами и ушёл с постоянной работы.
        </h4>
        <h4 className='about-me__git'>
        Github
        </h4>
        <img className="about-me__photo" src={photoStudent} alt="фото студента" />
      </div>
    </div>
  );
}

export default AboutMe;
