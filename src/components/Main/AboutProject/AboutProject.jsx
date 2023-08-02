import './AboutProject.css';

function AboutProject() {
  return (
    <div className="project">
      <h2 className="project__title">
      О проекте
      </h2>
      <div className='project__container'>
        <h3 className='project__subtitle'>
        Дипломный проект включал 5 этапов
        </h3>
        <h4 className='project__text'>
        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </h4>
        <h3 className='project__subtitle'>
        На выполнение диплома ушло 5 недель
        </h3>
        <h4 className='project__text'>
        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </h4>
      </div>
      <div className='project__container-week'>
        <h3 className='project__week-subtitle_activ'>
        1 неделя
        </h3>
        <h3 className='project__week-subtitle'>
        4 недели
        </h3>
        <h4 className='project__week-text'>
        Back-end
        </h4>
        <h4 className='project__week-text'>
        Front-end
        </h4>
      </div>
    </div>
  );
}

export default AboutProject;
