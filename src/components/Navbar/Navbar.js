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

  getLogo(){
    // let outer = {
    //   margin: '0 auto'
    // };

    let left = {
      float: 'left'
    };
   
    let right = {
      float: 'right',
      marginBottom: '0',
      marginLeft: '5px',
      fontSize: '25px'
    };

   return <div>
      <p style={right}>
          Balur Estate
      </p>
      <img style={left} src="https://github.com/ehalekote/BalurEstate/blob/master/img/BalurBirdLogo.png?raw=true" style={{maxHeight:"30px"}}/>        
    </div>
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" color="light" light expand="md">
          <NavbarBrand tag={this.getLogo} href="/">Balur Estate</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Coffee</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Conservation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Accomodation</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}