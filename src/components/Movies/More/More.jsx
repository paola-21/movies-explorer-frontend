import './More.css';

function More({onClick}) {
  return (
    <div className='more'>
        <button className='more__button' onClick={onClick}>Ещё</button>
    </div>
  );
}

export default More;
