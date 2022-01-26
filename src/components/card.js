import starIcon from '../images/star.png';

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
        <span className="grey">{props.star}</span>
        <span className="grey">{props.comments}</span>
        <span className="grey">{props.place}</span>
      </div>
      <p>{props.description}</p>
      <p className="bold">{props.price}</p>
    </div>
  );
};
export default Card;
