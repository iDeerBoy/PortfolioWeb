import "./deskTopMenu.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextApp } from "../../context/contextApp";
//images import
import github from "../../assets/github-square-brands.svg";
import linkedin from "../../assets/linkedin-brands.svg";
import instagram from "../../assets/instagram-square-brands.svg";
import githubGray from "../../assets/github-square-brands-G.svg";
import linkedinGray from "../../assets/linkedin-brands-G.svg";
import instagramGray from "../../assets/instagram-square-brands-G.svg";

export default function DeskTopMenu() {
  const { darkState } = useContext(ContextApp);
  const darkModeNav = darkState ? "darkNavDesk" : "lightNavDesk";

  return (
    <nav className={`menuDeskTop ${darkModeNav}`}>
      <Link to="/">
        <p>Its me</p>
      </Link>
      <Link to="/projects">
        <p>Projects</p>
      </Link>
      <Link to="/skills">
        <p>Skils</p>
      </Link>
      <Link to="/contact">
        <p>Contact</p>
      </Link>
      <div className="networks">
        <a
          href="https://github.com/iDeerBoy?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <img src={darkState ? github : githubGray} alt="linkedin logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/jimmy-pulido/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={darkState ? linkedin : linkedinGray} alt="linkedin logo" />
        </a>
        <a
          href="https://www.instagram.com/deerboy.art/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={darkState ? instagram : instagramGray}
            alt="linkedin logo"
          />
        </a>
      </div>
    </nav>
  );
}
