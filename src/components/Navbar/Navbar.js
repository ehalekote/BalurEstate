import React from 'react';
import BalurBirdLogo from "./../../imgs/BalurBirdLogo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  } from 'reactstrap';
import {NavLink} from 'react-router-dom'

export default class component extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" color="light" light expand="md">
          <a href="/"><img src={BalurBirdLogo} style={{maxHeight:"30px", paddingRight:'6px'}}/></a>        
          <NavLink to="/"><span style={{color:"black",fontSize:"22px",paddingLeft:"6px", paddingRight:"6px"}}>Balur Estate</span></NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/Coffee"><span style={{color:"black",fontSize:"22px",paddingLeft:"6px", paddingRight:"6px"}}>Coffee</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Conservation"><span style={{color:"black",fontSize:"22px",paddingLeft:"6px", paddingRight:"6px"}}>Conservation</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Accomodation"><span style={{color:"black",fontSize:"22px",paddingLeft:"6px", paddingRight:"6px"}}>Accomodation</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}