import React from "react";

export default function Headlines(props) {
  return (
    <div className="headlines-banner">
      <img src={props.src} alt={props.alt}></img>
      <div className="img-overlay"></div>
      <div className="banner-text">{props.bannerText}</div>
    </div>
  );
}
