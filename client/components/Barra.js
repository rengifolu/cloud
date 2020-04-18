import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { doLogOut } from "../redux/actions/postsAction";

class barra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logout = this.logout.bind(this);
  }

  logout = (e) => {
    //console.log(this.props);
    this.props.doLogOut();

    var x = document.cookie;
    console.log(x);
  };

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="Info" variant="dark">
          <Navbar.Brand as={Link} to="/" exact>
            MyCloud
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Link to='/login'>Login</Link> */}
              <Nav.Link as={Link} to="/portfolio" exact>
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" exact>
                Blog
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/coronavirus" exact>
                  Corona Virus
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.2" exact>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.3" exact>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action/3.4" exact>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {this.props.state.userLogin.isAuthenticated ? (
                <Nav.Link as={Link} to="/login" exact onClick={this.logout}>
                  Logout
                </Nav.Link>
              ) : null}
              <Nav.Link as={Link} to="/login" exact>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/sigin" exact>
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Route/> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogOut: () => dispatch(doLogOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(barra);
