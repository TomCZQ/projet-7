import React from "react";
import "./footer.scss";
import logo from "../../assets/logo_footer.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa"></img>
      <p className="credits">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
