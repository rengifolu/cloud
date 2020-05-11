import React from "react";
 import Form from 'react-bootstrap/Form'
 import Card from 'react-bootstrap/Card'
 import Button from 'react-bootstrap/Button'
 import "../../css/CuerpoBoton.css"


class Archivo extends React.Component {
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
  <Card.Img variant="top" src="https://1.bp.blogspot.com/-yy_Hx9gfrx0/WlvFi-u9iFI/AAAAAAAAElk/0bipfBVLpYgnMhsvouztH3kqL0HpzdFDgCLcBGAs/s1600/arc.jpg" />
  <Card.Body>
    <Card.Title>Archivo</Card.Title>
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


export default Archivo;
