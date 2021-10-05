import "./skills.scss";
import React, { useContext } from "react";
import { ContextApp } from "../../context/contextApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const toDay = new Date().getTime();
  const asDesigner = new Date("2018-05-01").getTime();
  const asUi = new Date("2021-06-02").getTime();
  const difDesigner = toDay - asDesigner;
  const difUi = toDay - asUi;

  const { darkState } = useContext(ContextApp);
  const darkModeTxt = darkState ? "darkTxt" : "lightTxt";
  const darkModeDays = darkState ? "darkDays" : "lightDays";
  const darkModeBorder = darkState ? "darkBorder" : "lightBorder";

  return (
    <section className="skillsContainer">
      <div className={`titleSkills ${darkModeTxt}`}>
        <h4>Me and my skills</h4>
      </div>
      <div className={`meContainer ${darkModeTxt}`}>
        <h2>Me</h2>
        <h4>a man of wealth and teast.</h4>
        <p>
          I've experienced in interface design for e-learning. Recently I have
          done the developer front end career in Acamica-Globant, whit a focus
          on the framework Ract.js; also I have been studying React native by
          myself.<br/><br/> In the developer, I found an academic niche that let me
          experience new technologies and introduce me to the functionality and
          logic building of the apps in that I work.
        </p>
      </div>
      <div className={`skills ${darkModeTxt}`}>
        <h2>Skills</h2>
        <div className={`devSkills ${darkModeBorder}`}>
          <div>
            <h4>{"<"}HTML5</h4>
            <p>Good practices;</p>
            <p>
              CEO knowledge={"{ true }"} <span>{"/>"}</span>
            </p>
          </div>
          <div>
            <h4>{"<"}CSS3</h4>
            <p>Good practices;</p>
            <p>
              Mobile first={"{ true }"} <span>{"/>"}</span>
            </p>
          </div>
          <div>
            <h4>{"<"}JavaScript</h4>
            <p>EcmaScript6;</p>
            <p>
              Good logic={"{ true }"} <span>{"/>"}</span>
            </p>
          </div>
          <div>
            <h4>{"<"}React.js</h4>
            <p>React Hooks;</p>
            <p>Custom Hooks;</p>
            <p>
              React Router={"{ true }"} <span>{"/>"}</span>{" "}
            </p>
          </div>
        </div>
        <div className="naturalSkills">
          <ul>
            <li>
              <p>Front End</p>
              <FontAwesomeIcon icon={faCheck} className={darkState ? 'iconDark' : 'iconLight'}/>
            </li>
            {/* <li>
              <p>
                Back End <span>in progress</span>
              </p>
            </li> */}
            <li>
              <p>Desing Knowledge</p>
              <FontAwesomeIcon icon={faCheck} className={darkState ? 'iconDark' : 'iconLight'}/>
            </li>
            <li>
              <p>Designing code with ease</p>
              <FontAwesomeIcon icon={faCheck} className={darkState ? 'iconDark' : 'iconLight'}/>
            </li>
            <li>
              <p>
                Spanish <span>native</span>
              </p>
            </li>
            <li>
              <p>
                English <span>medium</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={`daysContainer ${darkModeDays}`}>
        <div>
          <h3>{`${Math.floor(difUi / (1000 * 60 * 60 * 24))} DAYS`}</h3>
          <p>as web/ui developer</p>
        </div>
        <div>
          <h3>{`${Math.floor(difDesigner / (1000 * 60 * 60 * 24))} DAYS`}</h3>
          <p>as graphic designer</p>
        </div>
      </div>
    </section>
  );
}
