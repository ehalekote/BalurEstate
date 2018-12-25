import React from "react";
import "./MainVideo.css"
import { Container, Row, Col } from 'reactstrap';

class MainVideo extends React.Component {

  render(){
    return (
      <div className="MainVideo">

      	<Row>
      		<Col xs="1" md="2" lg="3">
        	</Col>

        	<Col xs="10" md="8" lg="6">
        		<div class="iframe-container">
		        	<iframe width="740" height="500" src="https://www.youtube.com/embed/HvnfABucXSA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		        </div>
        	</Col>

        	<Col xs="1" md="2" lg="3">
        	</Col>
		</Row>
      </div>
    );
  }
}
export default MainVideo;