import "./itsMe.scss";
import React, { useContext } from "react";
import { ContextApp } from "../../context/contextApp";

// import images
import meYellow02 from "../../assets/me_02.svg";
import meBlue02 from "../../assets/me_05.svg";

export default function ItsMe() {
  const { darkState } = useContext(ContextApp);
  const imgHeader = darkState ? meYellow02 : meBlue02;
  const darkModeTxt = darkState ? "darkHomeTxt" : "lightHomeTxt";

  return (
    <section className="itsMeContainer">
      <div className={`titleContainer ${darkModeTxt}`}>
        <h4>Me</h4>
      </div>
      <header className="headerContainer">
        <div className="imgContainer">
          <img src={imgHeader} alt="Its me Jimmy" />
        </div>
        <div className={`txtContainer ${darkModeTxt}`}>
          <h2>
            Hello<span>,</span> world<span>!</span>
          </h2>
          <h1>I’m Jimmy.</h1>
          <p>
            A newborn in the front end, developer and graphic design from
            Bogotá, Colombia.
          </p>
        </div>
      </header>
    </section>
  );
}
