import React from "react";
import "./MainChoicePanel.css"
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Redirect } from 'react-router';
import coffeeHands from "./../../imgs/coffeeHands.jpg"
import conservation3 from "./../../imgs/conservation3.jpg"
import windowShot from "./../../imgs/windowShot.JPG"


class MainChoicePanel extends React.Component {
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
        this.state = {
            redirect_Coffee:false,
            redirect_Conservation:false,
            redirect_Accomodation:false
        };
    }

    routeChange(link){
        if(link=="Coffee"){
            this.setState({redirect_Coffee: true});
        }
        else if(link=="Conservation"){
            this.setState({redirect_Conservation: true});
        }
        else if(link=="Accomodation"){
            this.setState({redirect_Accomodation: true});
        }
    }

  render(){
    
    if (this.state.redirect_Coffee) {
        return <Redirect push to="/Coffee" />;
    }
    else if(this.state.redirect_Conservation){
        return <Redirect push to="/Conservation" />;   
    }
    else if(this.state.redirect_Accomodation){
        return <Redirect push to="/Accomodation" />;
    }


    return (
      <Container className="MainChoicePanel">
        <Row>
            <Col xl="4" lg="6" >
                <Card className="card">
                    <CardImg top width="100%" src={coffeeHands} />
                    <CardBody>
                        <CardTitle><i>Coffee</i></CardTitle>
                        <CardText>Balur estate was formally started in the 1840s by the partnership of Thomas Cannon, Col. Onslow and R.G. Allardyce. Today, it is under the responsible stewardship of fourth generation coffee planters.<br/><br/></CardText>
                        <Button onClick={() => {this.routeChange('Coffee')}} color="danger">Learn More</Button>
                    </CardBody>
                </Card>
            </Col>
            <Col xl="4" lg="6">
                <Card className="card">
                    <CardImg top width="100%" src={conservation3} />
                    <CardBody>
                        <CardTitle><i>Conservation</i></CardTitle>
                        <CardText>Balur Estate lies amongst the Sahyadri Range of the Western Ghats, recently declared a UNESCO World Heritage site and home to a huge variety of flora and fauna – some unique to this part of the world.<br/><br/></CardText>
                        <Button onClick={() => {this.routeChange('Conservation')}} color="danger">Learn More</Button>
                    </CardBody>
                </Card>
            </Col>
            <Col xl="4" lg="12">
                <Card className="card">
                    <CardImg top width="100%" src={windowShot} />
                    <CardBody>
                        <CardTitle><i>Ecotourism</i></CardTitle>
                        <CardText>We have been working on conservation projects to address issues like soil erosion, nutrient runoff, pesticide drift and loss of wildlife habitats.<br/><br/><br/><br/></CardText>
                        <Button onClick={() => {this.routeChange('Accomodation')}} color="danger">Learn More</Button>
                    </CardBody>
                </Card>
            </Col>
                
        </Row>
      </Container>
    );
  }
}
export default MainChoicePanel;