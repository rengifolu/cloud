import React from "react";
import { Form, Button } from "react-bootstrap";
import "../css/Login.css";
//import axios from "axios";

// importamos connect para conectar componente con Store Global
import { connect } from "react-redux";

import { doLogin } from "../redux/actions/postsAction";
class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      isLoading: false,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleTextChange(e) {
    if (e.target.name === "email") {
      this.setState({
        email: e.target.value,
      });
    }
    if (e.target.name === "password") {
      this.setState({
        password: e.target.value,
      });
    }
  }
  onClick = (e) => {
    this.handleClick(this);
  };

  handleClick(e) {
    console.log(this.props);
    this.props
      .doLogin(this.state)
      .then((res) => this.props.history.push("/userloged"))
      .catch((err) => {
        console.log(err);
        this.setState({
          errors: { message: err.error },
          isLoading: false,
        });
      });
  }
  handleSubmit(event) {
    console.log("login ");
    //ccalert('A name was submitted: ');
    event.preventDefault();
  }

  render() {
    const { errors, email, password, isLoading } = this.state;
    return (
      <div className="Login">
        <h1>{this.props.state.counter}</h1>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.doLogin}>-</button>

        {errors.message && (
          <div className="alert alert-danger">{errors.message}</div>
        )}

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              name="email"
              onChange={this.handleTextChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else --hhh
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Passwordooo</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleTextChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            onClick={this.onClick}
            disabled={isLoading}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
    //contador: state.counter,
  };
};
/*
const mapDispatchToProps = (dispatch) => {
  return {
    /*      increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),  
    doLogin: (state) => dispatch(doLogin(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login); */

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (state) => dispatch(doLogin(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
