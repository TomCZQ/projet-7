import React from "react";
import "./header.scss";
import logo from "../../assets/LOGO.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <header className="header">
      <Link
        to="/"
        className={
          pathName === "/"
            ? "active-link-header logo-header-link"
            : "logo-header-link"
        }
      >
        <img src={logo} className="logo-header" alt="Logo Kasa"></img>
      </Link>
      <div className="navbar">
        <Link
          to="/"
          className={pathName === "/" ? "active-link-header accueil-link" : ""}
        >
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={
            pathName === "/a-propos"
              ? "active-link-header propos-link"
              : "propos-link"
          }
        >
          A propos
        </Link>
      </div>
    </header>
  );
}
