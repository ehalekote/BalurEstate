import React from "react";
import "./MainCover.css"
import { Container, Row, Col } from 'reactstrap';
import MainLogoFront from "./../../imgs/MainLogoFront.png"
import mainBackground from "./../../imgs/mainBackground.JPG"

class MainCover extends React.Component {

  render(){
    return (
      <div className="backgroundCover" style={{backgroundImage: `url(${mainBackground})`}}>
        <img className="homeLogo" src={MainLogoFront}/>
      </div>
    );
  }
}
export default MainCover;