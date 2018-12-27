import React from 'react';
import { Redirect } from 'react-router';
import BalurBirdLogo from "./../../imgs/BalurBirdLogo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

export default class component extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.routeChange = this.routeChange.bind(this);

    this.state = {
      isOpen: false,
      redirect_Coffee:false,
      redirect_Conservation:false,
      redirect_Accomodation:false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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

  render() {

    if (this.state.redirect_Coffee) {
        return <Redirect push to="BalurEstate/Coffee" />;
    }
    else if(this.state.redirect_Conservation){
        return <Redirect push to="/Conservation" />;   
    }
    else if(this.state.redirect_Accomodation){
        return <Redirect push to="/Accomodation" />;
    }

    return (
      <div>
        <Navbar fixed="top" color="light" light expand="md">
          <a href="/"><img src={BalurBirdLogo} style={{maxHeight:"30px", paddingRight:'6px'}}/></a>        
          <NavbarBrand href="/">Balur Estate</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => {this.routeChange('Coffee')}}><span style={{fontSize:"22px"}}>Coffee</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => {this.routeChange('Conservation')}}><span style={{fontSize:"22px"}}>Conservation</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => {this.routeChange('Accomodation')}}><span style={{fontSize:"22px"}}>Accomodation</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );

  }
}