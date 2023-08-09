import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Login.css';
import useFormAndValidation from '../hooks/useFormAndValidation';


function Register() {
    const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation()
  return (
    <div className="register__container" novalidate>
      <img className="register__photo" src={logo} alt="логотип" />
      <h2 className="register__header">Рады видеть!</h2>
      <form className="form__register">
      <div className="form__container">
          <h3 className="register__title">E-mail</h3>
          <input
            className="register__input"
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            required
            onChange={handleChange}
          />
          <span className="form__input-error">{errors.email}</span>

          <h3 className="register__title">Пароль</h3>
          <input
            className="register__input"
            type="password"
            placeholder="Пароль"
            name="password"
            autoComplete="new-password"
            required
            minLength="8"
            maxLength="16"
            onChange={handleChange}
          />
          <span className="form__input-error">{errors.password}</span>
        </div> 
        <button className="register__input-button" type="submit">
        Войти
        </button>
      </form>
      <h2 className="register__text">
        Ещё не зарегистрированы?{" "}
        <Link className="register__link" to={"/signup"}>
        Регистрация
        </Link>
      </h2> 
    </div>
  );
}

export default Register;
