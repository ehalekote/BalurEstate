import React from 'react';
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
          <a href="/"><img src="https://github.com/ehalekote/BalurEstate/blob/master/img/BalurBirdLogo.png?raw=true" style={{maxHeight:"30px", paddingRight:'6px'}}/></a>        
          <NavbarBrand href="/">Balur Estate</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Coffee/">Coffee</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Conservation/">Conservation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Accomodation/">Accomodation</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}