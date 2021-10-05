import "./projects.scss";
import React, { useState, useContext } from "react";
import { ContextApp } from "../../context/contextApp";

//import images
import mini_01 from "../../assets/mini_01.png";
import mini_02 from "../../assets/mini_02.png";
import mini_03 from "../../assets/mini_03.png";
import mini_04 from "../../assets/mini_04.png";
import project01 from "../../assets/project_01.png";
import project02 from "../../assets/project_02.png";
import project03 from "../../assets/project_03.png";
import project04 from "../../assets/project_04.png";

export default function Projects() {
  const [p01State, setP01State] = useState(true);
  const [p02State, setP02State] = useState(false);
  const [p03State, setP03State] = useState(false);
  const [p04State, setP04State] = useState(false);

  function toggleProject01() {
    setP01State(true);
    setP02State(false);
    setP03State(false);
    setP04State(false);
  }
  function toggleProject02() {
    setP01State(false);
    setP02State(true);
    setP03State(false);
    setP04State(false);
  }
  function toggleProject03() {
    setP01State(false);
    setP02State(false);
    setP03State(true);
    setP04State(false);
  }
  function toggleProject04() {
    setP01State(false);
    setP02State(false);
    setP03State(false);
    setP04State(true);
  }
  const { darkState } = useContext(ContextApp);
  const darkModeTxt = darkState ? "darkTxtProject" : "lightTxtProject";
  function darkShadow(stateProject, stateDark) {
    if (stateProject && stateDark) {
      return "projectTrueDark";
    } else if (stateProject && !stateDark) {
      return "projectTrueLight";
    } else {
      return "projectFalse";
    }
  }

  return (
    <section className="prjectsContainer">
      <div className={`titleContainer ${darkModeTxt}`}>
        <h4>Me and the boys</h4>
      </div>
      <div className="projects">
        <div className={`txtProjectsContainer ${darkModeTxt}`}>
          {p01State && <h2>Reward Store</h2>}
          {p02State && <h2>Gifos</h2>}
          {p03State && <h2>Easy sleep</h2>}
          {p04State && <h2>Podcast Channel</h2>}
          {p01State && (
            <p>
              An e-commerce app that uses a point system reward to purchase
              household elements. It implements the most recent tools of the
              Framework like hooks as useContext and useEffect, also I´ve
              created custom hooks to switch toggles; and for routing, I used
              React router. All of this using a restful API and handling
              petitions from the client-side server.
            </p>
          )}
          {p02State && (
            <p>
              It´s a single page connected to Giphy´s API, in this web you can
              make a search and this will return a list of 15 gifs. These gifs
              become from Giphy and the suggestions of the search. Also, it has
              a "Dark/Light" state, that defines the color of the components.
            </p>
          )}
          {p03State && (
            <p>
              This app lets you filter hotels into five different categories.
              You can search by date in, date out, country, price, and size. It
              is my first project in Ract.js. What I try was to understand the
              functionality of React framework, especially the dynamic
              rendering. For this, I use five filters that decide what we will
              see on our navigator.
            </p>
          )}
          {p04State && (
            <p>
              Aca encontraras unos cuantos podcast sobre el desarrollo web
              traidos directamente de Spotify. Esta single page es un ejercicio
              de como enfocar el html de una web en favor del SEO
            </p>
          )}
          <div className={`linkProjectContainer ${darkModeTxt}`}>
            {p01State && (
              <a
                href="https://ideerboy.github.io/reward-store-jimmy-pulido/#/"
                target="_blank"
                rel="noreferrer"
              >
                Complete View...
              </a>
            )}
            {p02State && (
              <a
                href="https://ideerboy.github.io/Poyecto02-Gyphos/"
                target="_blank"
                rel="noreferrer"
              >
                Complete View...
              </a>
            )}
            {p03State && (
              <a
                href="https://ideerboy.github.io/easy-sleep/"
                target="_blank"
                rel="noreferrer"
              >
                Complete View...
              </a>
            )}
            {p04State && (
              <a
                href="https://ideerboy.github.io/Podcast-Channel/"
                target="_blank"
                rel="noreferrer"
              >
                Complete View...
              </a>
            )}
          </div>
        </div>
        <div className={`imgMiniContainer`}>
          <img
            src={mini_01}
            alt="Project 01"
            onClick={toggleProject01}
            className={darkShadow(p01State, darkState)}
          />
          <img
            src={mini_02}
            alt="Project 02"
            onClick={toggleProject02}
            className={darkShadow(p02State, darkState)}
          />
          <img
            src={mini_03}
            alt="Project 03"
            onClick={toggleProject03}
            className={darkShadow(p03State, darkState)}
          />
          <img
            src={mini_04}
            alt="Project 04"
            onClick={toggleProject04}
            className={darkShadow(p04State, darkState)}
          />
        </div>
      </div>
      <div className="imgProjectsContainer">
        {p01State && <img src={project01} alt="Reward Store" />}
        {p02State && <img src={project02} alt="Gifos" />}
        {p03State && <img src={project03} alt="Easy sleep" />}
        {p04State && <img src={project04} alt="Podcast Channel" />}
      </div>
    </section>
  );
}
