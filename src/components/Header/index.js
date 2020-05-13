import React from "react";

import Intro from "../Intro";
import Contact from "../Contact";

function Header(props) {
  return (
    <div className="header">
      <div className="header__intro">
        <Intro />
      </div>
      <div className="header__contact">
        <Contact />
      </div>
    </div>
  );
}

export default Header;
