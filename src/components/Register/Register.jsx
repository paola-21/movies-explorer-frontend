import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Register.css';
import useFormAndValidation from '../hooks/useFormAndValidation';


function Register({ onRegister } ) {

    const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation()

    let location = useLocation();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { name, email, password } = values;
      onRegister({ name, email, password });
    };
  
  return (
    <div className="register" noValidate>
      <Link className="register__photo-link" to='/'><img className="register__photo" src={logo} alt="логотип" /> </Link>
      <h2 className="register__header">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit} >
        <div className="register__form-container">
          <h3 className="register__title">Имя</h3>
          <input
          className="register__input"
          type="text"
          placeholder="Имя"
          minLength="2"
          name="name"
          autoComplete="name"
          required
          onChange={handleChange}
          />
          <span className="register__input-error">{errors.name}</span>

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
        <button className="register__input-button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <h2 className="register__text">
        Уже зарегистрированы?
        <Link className="register__link" to={"/signin"}>
          Войти
        </Link>
      </h2>
    </div>
  );
}

export default Register;
