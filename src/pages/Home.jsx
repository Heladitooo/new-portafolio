import React from "react";
import ControlPanel from "../components/controlPanel/ControlPanel";
import Profile from "../assets/img/profile.jpg";
import "./style/Home.css";

class Home extends React.Component {
    render(){
        return (
          <div className="home">
            <div className="home-hero">
              <img src={Profile} alt="profile" className="hero__profile" />
              <div className="hero-names">
                <h1 className="hero__principalName">
                  Nicolas Esteban Prieto Sarmiento
                </h1>
                <h3 className="hero__name">( Heladitooo )</h3>
              </div>
              <ControlPanel className="home-panels" />
            </div>
          </div>
        );
    }
}

export default Home;