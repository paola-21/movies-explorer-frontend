import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import '../Register/Register.css';
import useFormAndValidation from '../hooks/useFormAndValidation';


function Login({ onLogin }) {
    const {values, handleChange, errors, isValid } = useFormAndValidation()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { email, password } = values;
        onLogin({ email, password });
    };

    const button = `register__input-button ${
      !isValid && "register__input-button__inactive"
    }`;

    return (
    <div className="register" noValidate>
      <Link className="register__photo-link" to='/'><img className="register__photo" src={logo} alt="логотип" /> </Link>
      <h2 className="register__header">Рады видеть!</h2>
      <form className="register__form" onSubmit={handleSubmit} noValidate>
        <div className="register__form-container">
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
          <span className="register__input-error">{errors.email}</span>

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
          <span className="register__input-error">{errors.password}</span>
        </div>
        <span className="register__input-error">{errors.q}</span>
        <button className={button} type="submit" name="q" disabled={!isValid}>
        Войти
        </button>
        </form>
        <h2 className="register__text">
        Ещё не зарегистрированы?
        <Link className="register__link" to={"/signup"}>
        Регистрация
        </Link>
        </h2> 
    </div>
  );
}

export default Login;
