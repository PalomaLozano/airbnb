//import img1 from '../imagestwo/image1.png';

import starIcon from '../imagestwo/star.png';

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.img}
        alt="happy woman in a swimming tournament"
        className="card--image"
      />
      <div className="card--stats">
        <img src={starIcon} alt="star icon" className="card--star" />
        <span className="grey">{props.rating}</span>
        <span className="grey">{props.reviewCount}</span>
        <span className="grey">-{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p className="bold">{props.price}€</p>
    </div>
  );
};
export default Card;
