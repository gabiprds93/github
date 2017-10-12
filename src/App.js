import React, { Component } from 'react';
import './App.css';
//import testapi from './testapi';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const NavbarInstance = () =>
{
  return(
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavItem eventKey={3} href="#">Link</NavItem>        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarInstance/>
      </div>
    );
  }
}

export default App;
