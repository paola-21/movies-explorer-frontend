import './Techs.css';

function Techs() {
  return (
    <div className="techs">
      <h2 className="techs__title">
      Технологии
      </h2>
      <h3 className='techs__subtitle'>
      7 технологий
      </h3>
      <h4 className='techs__text'>
      На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </h4>
      <div className='techs__container'>
        <h3 className='techs__tech'>
        HTML
        </h3>
        <h3 className='techs__tech'>
        CSS
        </h3>
        <h4 className='techs__tech'>
        JS
        </h4>
        <h4 className='techs__tech'>
        React
        </h4>
        <h4 className='techs__tech'>
        Git
        </h4>
        <h4 className='techs__tech'>
        Express.js
        </h4>
        <h4 className='techs__tech'>
        mongoDB
        </h4>
      </div>
    </div>
  );
}

export default Techs;
