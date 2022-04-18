
import  NotFoundImage  from '../assets/NotFoundImage.png';
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <div className='text'>
          <h1 className='HeaderText'>Oops! Someone is still adding the seasoning to the page.</h1>
          <p className='opps'>You may return to the Homepage or continue your delicious food journet via the links in the navigation right on top.</p>
           <img className="NotFoundImage" src={NotFoundImage} alt="NotFoundImage" />
        </div>
      </div>
    </div>
  )
}

export default NotFound