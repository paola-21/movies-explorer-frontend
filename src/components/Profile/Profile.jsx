import './Profile.css';

function Profile() {
  return (
    <div className='profile'>
      <form className='profile__form'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <div>
        <div className='profile__input-container'>
          <h3 className='profile__input-text'>Имя</h3>
          <input className='profile__input' placeholder='Имя' type="text"></input>
        </div>
        <div className='profile__input-container'>
          <h3 className='profile__input-text'>E-mail</h3>
          <input className='profile__input' placeholder='E-mail' type="email"></input>
        </div>
        </div>
        <button className='profile__edit'>Редактировать</button>
        <button className='profile__exit'>Выйти из аккаунта</button>
      </form>

    </div>
  );
}

export default Profile;
