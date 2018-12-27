import React from 'react';
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
          <NavbarBrand href="/">Balur Estate</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Coffee/"><span style={{fontSize:"22px"}}>Coffee</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Conservation/"><span style={{fontSize:"22px"}}>Conservation</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Accomodation/"><span style={{fontSize:"22px"}}>Accomodation</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}