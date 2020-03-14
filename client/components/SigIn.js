import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../css/SigIn.css';

class SigIn extends React.Component {

  render() {
    return (
      <div className="SigIn">
      <Form>
        <Form.Group controlId="formBasicSurName">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Enter your surname" />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicUserName">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter a user name" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    );
  }
}

export default SigIn;