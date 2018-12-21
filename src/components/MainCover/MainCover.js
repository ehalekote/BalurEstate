import React from "react";
import "./MainCover.css"
import { Container, Row, Col } from 'reactstrap';




class MainCover extends React.Component {

  render(){
    return (
      <div className="backgroundCover">
        <img className="homeLogo" src="https://github.com/ehalekote/BalurEstate/blob/master/img/MainLogoFront.png?raw=true"/>
      </div>
    );
  }
}
export default MainCover;