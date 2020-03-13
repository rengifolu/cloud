import React from 'react';
import { BrowserRouter as Router, Route, Link ,NavLink } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import Login from './Login';


class barra extends React.Component {

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">MyCloud</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Link to='/login'>Login</Link> */}
              <Nav.Link as={Link} to='/login' exact>Login</Nav.Link>
              <Nav.Link as={Link} to='/pricing' exact>Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="#action/3.1" exact>Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.2" exact>Another action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.3" exact>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action/3.4" exact>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="#deets" exact>More deets</Nav.Link>
              <Nav.Link as={Link} to="#memes" exact>Dank memes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Route/> */}
      </div>
    );
  }
}

export default barra;