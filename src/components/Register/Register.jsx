import React from "react";
import { Link } from "react-router-dom";
import './Register.css';

function Register() {

  return (
    <div className="login__container">
      <h2 className="login__header">Добро пожаловать!</h2>
      <form className="form__login">
        <h3 className="login__title">Имя</h3>
        <input
          className="login__input"
          type="email"
          placeholder="Имя"
          name="email"
          autoComplete="email"
          required
        />
        <span className="form__input-error"></span>

        <h3 className="login__title">E-mail</h3>
        <input
          className="login__input"
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          required
        />
        <span className="form__input-error"></span>

        <h3 className="login__title">Пароль</h3>
        <input
          className="login__input"
          type="password"
          placeholder="Пароль"
          name="password"
          autoComplete="new-password"
          required
          minLength="8"
          maxLength="16"
        />
        <span className="form__input-error"></span>

        <button className="login__input-button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <h2 className="login__text">
        Уже зарегистрированы?{" "}
        <Link className="login__link" to={"/signin"}>
          Войти
        </Link>
      </h2>
    </div>
  );
}

export default Register;
