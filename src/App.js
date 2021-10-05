import "./App.scss";
import React, { useContext } from "react";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import { ContextApp } from "./context/contextApp";
import SwitchDark from "./components/switchDark/switchDark";
import ItsMe from "./pages/itsMe/itsMe";
import Projects from "./pages/projects/projects";
import Skills from "./pages/skills/skills";
import Contact from "./pages/contact/contact";
import MobileMenu from "./components/mobileMenu/mobileMenu";
import DeskTopMenu from "./components/deskTopMenu/deskTopMenu";

function App() {
  const { darkState } = useContext(ContextApp);
  const darkMode = darkState ? "darkApp" : "lightApp";

  return (
    <div className={`App ${darkMode}`}>
      <SwitchDark />
      <HashRouter>
      <DeskTopMenu />
        <Switch>
          <Route exact path='/PortfolioWeb/' component={ItsMe}/>
          <Route exact path='/PortfolioWeb/projects' component={Projects}/>
          <Route exact path='/PortfolioWeb/skills' component={Skills}/>
          <Route exact path='/PortfolioWeb/contact' component={Contact}/>
        </Switch>
        <MobileMenu />
      </HashRouter>
    </div>
  );
}

export default App;
