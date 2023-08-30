import './Profile.css';
import React, { useContext, useEffect } from 'react';
import useFormAndValidation from '../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({handleProfile, signOut}) {

  const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation()
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleSubmit = (e) => {
    const { name, email } = values;
    e.preventDefault();
    handleProfile({ email, name });
  }

  React.useEffect(() => {
    setValues ({
      email: currentUser.email,
      name: currentUser.name,
  })
  }, [setValues, currentUser.name, currentUser.email]);

  const isButtonDisabled =
    isValid &&
    (values.name !== currentUser.name || values.email !== currentUser.email);
    

  return (
    <div className='profile'>
      <form className='profile__form' >
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <div>
          <div className='profile__input-container'>
            <label className='profile__input-text' for="name" >Имя</label>
            <input className='profile__input' 
            type="text" onChange={handleChange}
            name="name"
            required
            id="name"
            placeholder='имя'
        minLength="2"
        value={values.name}
        />
          </div>
          <span className="register__input-error" name="name">{errors.name}</span>
          <div className='profile__input-container'>
            <label className='profile__input-text' for="email">E-mail</label>
            <input className='profile__input' placeholder='email' type="email" onChange={handleChange} name="email" minLength="2"
          required id="email" 
          value={values.email}/>
          </div>
          <span className="register__input-error">{errors.email}</span>
        </div>
          <button className='profile__edit' onClick={handleSubmit} disabled={!isButtonDisabled ? true : false}>Редактировать</button>
          <button className='profile__exit' onClick={signOut}>Выйти из аккаунта</button>
      </form>
    </div>
  );
}

export default Profile;
