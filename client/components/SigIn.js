import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/SigIn.css';
import axios from 'axios';

var querystring = require('querystring');

class SigIn extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      user_name: '',
      email: '',
      password: '',
      messageFromServer: ''
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.insertRegister = this.insertRegister.bind(this);
  }
  handleTextChange(e) {
    if (e.target.name === "first_name") {
      this.setState({
        first_name: e.target.value
      });
    }
    if (e.target.name === "last_name") {
      this.setState({
        last_name: e.target.value
      });
    }
    if (e.target.name === "user_name") {
      this.setState({
        user_name: e.target.value
      });
    }
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
    this.insertRegister(this);
  }

  insertRegister(e) {
    try {
      //console.log('valores :' + e.state.first_name + ' ' + e.state.last_name + ' ' + e.state.user_name + ' ' + e.state.email + ' ' + e.state.password);
      axios.post('/register',
        querystring.stringify({
          first_name: e.state.first_name,
          last_name: e.state.last_name,
          user_name: e.state.user_name,
          email: e.state.email,
          password: e.state.password
        }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(function (response) {
        e.setState({
          messageFromServer: response.data,
        });
      });
      this.props.history.push('/login')
    } catch (error) {

    }
  }



  handleSubmit(event) {
    console.log('mensaje ');
    //ccalert('A name was submitted: ');
    event.preventDefault();
  }


  render() {
    return (
      <div className="SigIn">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicSurName">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your surname"
              value={this.state.first_name}
              name="first_name"
              onChange={this.handleTextChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={this.state.last_name}
              name="last_name"
              onChange={this.handleTextChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a user name"
              value={this.state.user_name}
              name="user_name"
              onChange={this.handleTextChange}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

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
              value={this.state.password}
              name="password"
              onChange={this.handleTextChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            onClick={this.onClick}
          >
            Submit
          </Button>
          <h1>{this.state.messageFromServer}</h1>
        </Form>
      </div>
    );
  }
}

export default SigIn;