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
                        <CardTitle>Coffee</CardTitle>
                        <CardText>Chikmagalur was the scene of all the action that saw India getting introduced to coffee. In the 17th century A.D. coffee first arrived in India when Baba Budan brought 7 seeds from Mocha, Yemen.<br/><br/></CardText>
                        <Button onClick={() => {this.routeChange('Coffee')}} color="danger">Learn More</Button>
                    </CardBody>
                </Card>
            </Col>
            <Col xl="4" lg="6">
                <Card className="card">
                    <CardImg top width="100%" src={conservation3} />
                    <CardBody>
                        <CardTitle>Conservation</CardTitle>
                        <CardText>Balur Estate lies amongst the Sahyadri Range of the Western Ghats, recently declared a UNESCO World Heritage site and home to a huge variety of flora and fauna.<br/><br/></CardText>
                        <Button onClick={() => {this.routeChange('Conservation')}} color="danger">Learn More</Button>
                    </CardBody>
                </Card>
            </Col>
            <Col xl="4" lg="12">
                <Card className="card">
                    <CardImg top width="100%" src={windowShot} />
                    <CardBody>
                        <CardTitle>Accomodations</CardTitle>
                        <CardText>The Malenadu region is famous for its rains, hills, streams, waterfalls, the rolling mist, lush green forests and great food. Coupled with large, well run coffee plantations dating back over a century.<br/><br/></CardText>
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