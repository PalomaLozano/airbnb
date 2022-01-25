import img1 from '../images/image1.png';
import img2 from '../images/wedding.png';
import img3 from '../images/mountain.png';
import starIcon from '../images/star.png';

const Card = () => {
  return (
    <div className="card">
      <img
        src={img1}
        alt="happy woman in a swimming tournament"
        className="card--image"
      />
      <div className="card--stats">
        <img src={starIcon} alt="star icon" className="card--star" />
        <span className="grey">5.0</span>
        <span className="grey">(6.)</span>
        <span className="grey">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p className="bold">From $136/person</p>
    </div>
  );
};
export default Card;
