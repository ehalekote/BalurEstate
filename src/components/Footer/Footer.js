import React from "react";
import "./Footer.css"
import { Container, Row, Col } from 'reactstrap';

import Map from "./Map"

class Footer extends React.Component {

  render(){
    return (
      <div className="Footer">
        <Container >
            <Row>
                <Col>
                    Find us on TA & FB!
                    <br/>
                    <br/>
                    Images and video courtesy of <span className="title">Contista Productions</span>
                </Col>
                <Col>
                    <p><i><span className="title">Address:</span></i> <br/>Balur Estate <br/> Javali Post <br/> Chickmaglur district <br/> Karnataka, India </p>
                    <p><i><span className="title">Email:</span></i> <br/>stay@linger.in</p>
                    <p><i><span className="title">Phone:</span></i> <br/>+91-95900-50001</p>
                </Col>
                <Col>
                    <Map />
                </Col>
                
            </Row>
        </Container>
      </div>
    );
  }
}
export default Footer;