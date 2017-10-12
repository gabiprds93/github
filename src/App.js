import React, { Component } from 'react';
import './App.css';
//import testapi from './testapi';
import {Navbar, Nav, NavItem, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Grid, Row, Col} from 'react-bootstrap';
import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom';

const Home = ({model}) =>
{
  return(
    <div>
      <h1>Github Battle: Battle your friends... and stuff.</h1>
      <Button bsStyle="danger">Battle</Button>
    </div>
  )
};

const Battle = ({model}) =>
{
  return(
    <Grid>
      <Row className="show-grid">
        <PlayerOne model={model}/>
        <PlayerTwo model={model}/>
      </Row>
    </Grid>
  )
};

const PlayerOne = ({model}) =>
{
  return(
    <Col xs={6} md={6}>
    {console.log(model.user)}
    {!model.user ? <form>
        <FormGroup
          controlId="formBasicText"
          validationState={model.getValidationState()}
        >
          <ControlLabel>Player One</ControlLabel>
          <FormControl
            type="text"
            value={model.value}
            placeholder="GitHub username"
            onChange={ e=>model.handleChange1(e)}
          />
        </FormGroup>
        <Button type="submit" onClick={(e)=>model.getData(e, model.inputPlayer1)}>
          Submit
        </Button>
    </form>
    :
    <div>
      <img/>
      <h2>@{model.user.profile.login}</h2>
      <Button onClick={()=>model.setUser1("")}>Reset</Button>
    </div>
    }
    
    </Col>    
  );
};

const PlayerTwo = ({model}) =>
{
  return(
    <form>
      <Col xs={6} md={6}>
        <FormGroup
          controlId="formBasicText"
          validationState={model.getValidationState()}
        >
          <ControlLabel>Player Two</ControlLabel>
          <FormControl
            type="text"
            value={model.value}
            placeholder="GitHub username"
            onChange={ e=>model.handleChange2(e)}
          />
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </Col>
    </form>
  );
};

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <li className={match ? 'active' : ''}>
      <NavLink to={to}>{label}</NavLink>
    </li>
  )}/>
)

const NavbarInstance = ({model}) =>
{
  return(
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="https://github.com/">GitHub</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
          <OldSchoolMenuLink to="/battle" label="Battle"/>
          <OldSchoolMenuLink to="/popular" label="Popular"/>       
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const App = ({model}) => 
{
  return(
    <BrowserRouter>
      <div className="App">
        <NavbarInstance/>
        <Switch>
          <Route exact path="/" render={() => <Home model={model}/>}/>
          <Route path="/battle" render={() => <Battle model={model}/>}/> 
          <Route component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;