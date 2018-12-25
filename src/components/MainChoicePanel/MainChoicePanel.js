import React from "react";
import "./MainChoicePanel.css"
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class MainChoicePanel extends React.Component {
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange(link){
        let path = '/'+ link;
        this.props.history.push(path);
    }

  render(){
    return (
      <Container className="MainChoicePanel">
        <Row>
            <Col xl="4" lg="6" >
                <Card className="card">
                    <CardImg top width="100%" src="https://github.com/ehalekote/BalurEstate/blob/master/img/demo-image-01.jpg?raw=true" />
                    <CardBody>
                        <CardTitle>Coffee</CardTitle>
                        <CardText>Chikmagalur was the scene of all the action that saw India getting introduced to coffee. In the 17th century A.D. coffee first arrived in India when Baba Budan brought 7 seeds from Mocha, Yemen.<br/><br/></CardText>
                        <Button onClick={() => {this.routeChange('Coffee')}} color="danger">Learn More</Button>
                    </CardBody>
                </Card>
            </Col>
            <Col xl="4" lg="6">
                <Card className="card">
                    <CardImg top width="100%" src="https://github.com/ehalekote/BalurEstate/blob/master/img/conservation3.jpg?raw=true" />
                    <CardBody>
                        <CardTitle>Conservation</CardTitle>
                        <CardText>Balur Estate lies amongst the Sahyadri Range of the Western Ghats, recently declared a UNESCO World Heritage site and home to a huge variety of flora and fauna.<br/><br/></CardText>
                        <Button onClick={() => {this.routeChange('Conservation')}} color="danger">Learn More</Button>
                    </CardBody>
                </Card>
            </Col>
            <Col xl="4" lg="12">
                <Card className="card">
                    <CardImg top width="100%" src="https://github.com/ehalekote/BalurEstate/blob/master/img/inner_chair.JPG?raw=true" alt="Card image cap" />
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