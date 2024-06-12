import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tag from "../../components/Tag/tag.js";
import data from "../../data/logements.json";
import Dropdown from "../../components/Dropdown/Dropdown.js";
import Carousel from "../../components/Carousel/carousel.js";
import "./fiche-logement.scss";
import Rating from "../../components/Rating/Rating.js";

function findLogementById(logementId) {
  return data.find((logement) => logement.id === logementId);
}

function FichesLogement() {
  const navigate = useNavigate("");
  const { id: logementId } = useParams();
  const logement = findLogementById(logementId);
  const [equipments, setEquipments] = useState([]);
  const [host, setHost] = useState("");
  const [coverPictures, setCoverPictures] = useState([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (!logement) {
      navigate("/404");
    } else {
      setEquipments(logement.equipments);
      setHost(logement.host);
      setCoverPictures(logement.pictures);
      setLocation(logement.location);
      setTitle(logement.title);
      setRating(logement.rating);
      setLoading(false);
    }
  }, [logement, navigate]);

  function tagGenerator(tags) {
    const tagComponents = [];
    for (let i = 0; i < tags.length; i++) {
      tagComponents.push(<Tag key={i} tag={tags[i]} />);
    }
    return tagComponents;
  }

  function equipement() {
    return (
      <div>
        {equipments.map((equipement, index) => (
          <p key={index}>{equipement}</p>
        ))}
      </div>
    );
  }

  return loading ? (
    <div> Loading...</div>
  ) : (
    <div className="fiche-logement">
      {coverPictures.length > 1 ? (
        <Carousel pictures={coverPictures} logement={logement} />
      ) : (
        <img src={coverPictures[0]} alt="Logement" className="single-picture" />
      )}
      <div className="logement-data">
        <div className="logement-tags">
          <div className="logement">
            <h1>{title}</h1>
            <div className="location">{location}</div>
          </div>
          <div className="tags">{tagGenerator(logement?.tags)}</div>
        </div>
        <div className="host-rating">
          <div className="host">
            <p className="host-name">{host?.name}</p>
            <img
              className="host-picture"
              src={host?.picture}
              alt="Propriétaire du logement"
            ></img>
          </div>
          <Rating rating={rating} />
        </div>
      </div>
      <div className="dropdowns">
        <Dropdown
          className="dropdown"
          dropdownName="Description"
          description={logement?.description}
        />
        <Dropdown
          className="dropdown"
          dropdownName="Équipements"
          description={equipement()}
        />
      </div>
    </div>
  );
}

export default FichesLogement;
//test
