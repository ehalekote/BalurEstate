import React from "react";
import "./PointsOfInterest.css"
import { Container, Row, Col } from 'reactstrap';

class PointsOfInterest extends React.Component {

  render(){
    return (
      <div className="PointsOfInterest">
      	<iframe src="https://www.google.com/maps/d/embed?mid=1Dnw-y1xELalYQJsqzFBbkm1spvrFYJvB" width="640" height="480"></iframe>
      </div>
    );
  }
}
export default PointsOfInterest;