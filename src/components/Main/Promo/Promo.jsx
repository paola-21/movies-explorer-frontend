import textPromo from "../../../images/textPromo.svg";
import './Promo.css';

function Promo() {
  return (
    <div className="promo">
      <h2 className="promo__title">
      Учебный проект студента факультета Веб-разработки.
      </h2>
      <img className="promo__img" src={textPromo} alt="картинка" />
    </div>
  );
}

export default Promo;
