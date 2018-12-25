import React from "react";
import "./SecondaryContent.css"
import { Container, Row, Col } from 'reactstrap';
import PropTypes from "prop-types";

class SecondaryContent extends React.Component {


  createCol = (inputCol) => {
    let col = []

    for (let j = 0; j <inputCol.length; j++) {
      col.push(
        <div style={{paddingBottom:"2%"}}>
            <img src={inputCol[j]} /> 
        </div>
      )
    }
    return col
  }

  render(){

    const {
        text,
        col1,
        col2,
        col3}=this.props;


    return (
      <div className="SecondaryContent">
        
        <Row>  
          <Col lg="6" sm="12">
            {text}
          </Col>

          <Col lg="6" sm="12" className="mainCol">
            <Row className="imgGridRow" noGutters="True">
              <Col xs="12" md={{ size: 6, offset: 3 }} className="imgGrid">
                {this.createCol(this.props.col1)}
              </Col>

            
            </Row>
          </Col>
        </Row>

      </div>
    );
  }
}

SecondaryContent.PropTypes = {
  text: PropTypes.object.isRequired,
  col1: PropTypes.arrayOf(PropTypes.string).isRequired,
  col2: PropTypes.arrayOf(PropTypes.string).isRequired,
  col3: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SecondaryContent;