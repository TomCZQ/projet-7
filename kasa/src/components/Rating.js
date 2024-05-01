import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../style/rating.css";

function Rating(props) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const starColor = i <= props.rating ? "red" : "grey";
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} className={`${starColor}`} />
    );
    console.log(i);
  }
  return <div className="rating">{stars}</div>;
}

export default Rating;
