import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { card } = props;
  return (
    <Link to={`/logement/${card.id}`} className="card" key={card.id}>
      <img src={card.cover} alt={card.title}></img>
      <h2>{card.title}</h2>
      <div className="overlay-card"></div>
    </Link>
  );
}

export default Card;
