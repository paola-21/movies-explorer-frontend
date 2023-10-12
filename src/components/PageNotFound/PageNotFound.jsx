import { Link, useNavigate } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1, {replace: true})
  }
  return (
    <div className="not-found">
      <h3 className="not-found__title">
       <span>404</span>Страница не найдена
      </h3>
      <Link className="button_type_to-main" onClick={goBack}>Назад</Link>
    </div>
  );
}

export default PageNotFound;
