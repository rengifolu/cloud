import React from "react";
import { Form, Button } from "react-bootstrap";
import "../css/Login.css";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      datosUsuario:{}
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleTextChange(e) {
    if (e.target.name === "email") {
      this.setState({
        email: e.target.value
      });
    }
    if (e.target.name === "password") {
      this.setState({
        password: e.target.value
      });
    }
  }
  onClick(e) {
    this.handleClick(this);
  }
  handleClick(event) {
    var payload = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("./login", payload)
      .then(res => {
        console.log('este 1 : ' , res.status);
        console.log('este 2 : ' , res.data);
        console.log('este 3 : ' , res.data.user);
        console.dir('este 4 : ' , res.data.json);
        if (res.status === 200) {
          this.setState({
            datosUsuario: res.data.user
          });
          this.props.history.push("/userloged");
          console.log('este 5 : ' , this.state.datosUsuario);
        } else {
          const error = new Error(res.error);
          throw error;
        }
        console.log('este 6 : ' , this.state.datosUsuario);
      })
      .catch(err => {
        console.error(err);
        alert("Error al iniciar sesión, inténtelo de nuevo");
      });
  }
  handleSubmit(event) {
    console.log("login ");
    //ccalert('A name was submitted: ');
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={this.state.email}
              name="email"
              onChange={this.handleTextChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleTextChange}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={this.onClick}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
