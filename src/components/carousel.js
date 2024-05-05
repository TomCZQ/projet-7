import React, { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/carousel.css";

function Carousel(props) {
  const logement = props.logement;
  const pictures = props.pictures;
  const [indexPicture, setIndexPicture] = useState(0);

  function arrowRight() {
    setIndexPicture((prevIndex) =>
      prevIndex === props.pictures.length - 1 ? 0 : prevIndex + 1
    );
  }

  function arrowLeft() {
    setIndexPicture((prevIndex) =>
      prevIndex === 0 ? props.pictures.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className="carousel">
      <a href={pictures[indexPicture]} target="_blank" rel="noreferrer">
        <img
          className="main-picture"
          src={pictures[indexPicture]}
          alt={logement.title}
        />
      </a>
      <div className="bulletNumbers">
        {indexPicture + 1}/{pictures.length}
      </div>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="left-chevron"
        onClick={arrowLeft}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="right-chevron"
        onClick={arrowRight}
      />
    </div>
  );
}

export default Carousel;
