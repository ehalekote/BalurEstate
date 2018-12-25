import React from "react";
import "./MainCover.css"
import { Container, Row, Col } from 'reactstrap';

class MainCover extends React.Component {

  render(){
    return (
      <div className="backgroundCover">
        <img className="homeLogo" src="/imgs/MainLogoFront.png"/>
      </div>
    );
  }
}
export default MainCover;