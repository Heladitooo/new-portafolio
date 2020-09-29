import React from "react";
import Logo from "../../assets/img/logo.png";
import "./style/Header.css";
import ControlPanel from "../controlPanel/ControlPanel";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-pictureContainer">
          <Link to="/">
            <img src={Logo} alt="Logo" className="pictureContainer__image" />
          </Link>
        </div>
        <ControlPanel />
      </div>
    );
  }
}

export default Header;
