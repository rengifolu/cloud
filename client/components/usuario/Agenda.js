import React from "react";
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../../css/CuerpoBoton.css"


class Agenda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: " ",
    };
  }

  componentDidMount(e) {

  }

  render() {
    return (
      <div className="CuerpoBoton">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.taschenklub.de/files/image/id/89807/fixed/1/w/613/h/613/n/freitag-agenda-2020.jpg" />
          <Card.Body>
            <Card.Title>Agenda</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}


export default Agenda;
