import "./mobileMenu.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextApp } from "../../context/contextApp";

export default function MobileMenu() {
  const { darkState } = useContext(ContextApp);
  const darkModeNav = darkState ? "darkNav" : "lightNav";

  return (
    <nav className={`menuMobile ${darkModeNav}`}>
      <Link to="/PortfolioWeb/">
        <p>Its me</p>
      </Link>
      <Link to="/PortfolioWeb/projects">
        <p>Projects</p>
      </Link>
      <Link to="/PortfolioWeb/skills">
        <p>Skils</p>
      </Link>
      <Link to="/PortfolioWeb/contact">
        <p>Contact</p>
      </Link>
    </nav>
  );
}
