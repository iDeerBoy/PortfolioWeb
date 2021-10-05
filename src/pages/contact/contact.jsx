import "./contact.scss";
import React, { useContext } from "react";
import { ContextApp } from "../../context/contextApp";

//images import
import github from "../../assets/github-square-brands.svg";
import linkedin from "../../assets/linkedin-brands.svg";
import instagram from "../../assets/instagram-square-brands.svg";
import githubGray from "../../assets/github-square-brands-G.svg";
import linkedinGray from "../../assets/linkedin-brands-G.svg";
import instagramGray from "../../assets/instagram-square-brands-G.svg";

export default function Contact() {
  const { darkState } = useContext(ContextApp);
  const darkModeTxt = darkState ? "darkTxt" : "lightTxt";
 
  return (
    <section className={`contactContainer ${darkModeTxt}`}>
      <div className="titleContact">
        <h4>Me and you</h4>
      </div>
      <div className='info'>
        <h2>Talk to me</h2>
        <p>E-mail: deerboy.art@gmail.com</p>
        <p>Phone: +57 311 550 22 86</p>
      </div>
      <div className='info'>
        <h2>Find me</h2>
        <div className={`networks ${darkModeTxt}`}>
          <a href='https://github.com/iDeerBoy?tab=repositories' target='_blank' rel='noreferrer' ><img src={darkState ? github : githubGray} alt="linkedin logo"/></a>
          <a href='https://www.linkedin.com/in/jimmy-pulido/' target='_blank' rel='noreferrer' ><img src={darkState ? linkedin : linkedinGray} alt="linkedin logo"/></a>
          <a href='https://www.instagram.com/deerboy.art/' target='_blank' rel='noreferrer' ><img src={darkState ? instagram : instagramGray} alt="linkedin logo" /></a>
        </div>
      </div>
    </section>
  );
}
