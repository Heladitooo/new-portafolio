import React from "react";
import "./style/ControlPanel.css";
import { Link } from "react-router-dom";

class ControlPanel extends React.Component {
    render(){
        return (
          <div className="panels-container">
            <ul className="panels">
              <li>
                <Link to="/diplomas">diplomas</Link>
              </li>
              <li>
                <Link to="/information">información</Link>
              </li>
              <li>
                <Link to="/projects">proyectos</Link>
              </li>
            </ul>
          </div>
        );
    }
}

export default ControlPanel;