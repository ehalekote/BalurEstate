import React from "react";
import "./Footer.css"
import { Container, Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTripadvisor} from '@fortawesome/free-brands-svg-icons' 
import Map from "./Map"

library.add(faFacebook, faTripadvisor)

class Footer extends React.Component {

  render(){
    return (
      <div className="Footer">
        <Container >
            <Row>
                <Col>
                    Find us on &nbsp; <a href="https://www.facebook.com/pages/Linger-Balur-Estate/245012702195985"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" /></a> &nbsp; & &nbsp; <a href="https://www.tripadvisor.com/Hotel_Review-g1584395-d1994921-Reviews-Linger_at_Balur_Estate-Mudigere_Chikkamagaluru_District_Karnataka.html"><FontAwesomeIcon icon={['fab', 'tripadvisor']} size="lg" color="green"/></a>
                    <br/>
                    <br/>
                    Images courtesy of <span className="title"><a style={{color:"white"}} href="https://www.contistaproductions.com">Contista Productions</a></span>
                </Col>
                <Col>
                    <p><i><span className="title">Address:</span></i> <br/>Balur Estate <br/> Javali Post <br/> Chickmaglur district <br/> Karnataka, India </p>

                    <p><i><span className="title">Business Inquiries:</span></i> <br/>coffee@balurestate.com</p>

                    <p><i><span className="title">Stay Inquiries:</span></i> <br/>stay@linger.in</p>

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