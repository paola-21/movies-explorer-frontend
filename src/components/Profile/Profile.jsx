import './Profile.css';
import React, { useContext, useEffect } from 'react';
import useFormAndValidation from '../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({onProfile}) {

  const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation()
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onProfile({ email, name });
  }

  return (
    <div className='profile'>
      <form className='profile__form' onSubmit={handleSubmit} >
        <h2 className='profile__title'>{name}</h2>
        <div>
          <div className='profile__input-container'>
            <h3 className='profile__input-text'>Имя</h3>
            <input className='profile__input' 
            placeholder={currentUser.name} 
            type="text" onChange={handleChangeName} 
            name="name"
            required
        minLength="2"
        />
        <span className="register__input-error" name="name">{errors.name}</span>
          </div>
          <div className='profile__input-container'>
            <h3 className='profile__input-text'>E-mail</h3>
            <input className='profile__input' placeholder='E-mail' type="email" onChange={handleChangeEmail} name="email" minLength="2"
          required></input>
          </div>
          <span className="register__input-error">{errors.email}</span>
        </div>
          <button className='profile__edit'>Редактировать</button>
          <button className='profile__exit'>Выйти из аккаунта</button>
      </form>
    </div>
  );
}

export default Profile;
