import React from "react";
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../../css/CuerpoBoton.css"


class Imagen extends React.Component {
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
          <Card.Img variant="top" src="https://speechwiki.org/wp-content/uploads/2019/07/Sony-o-Canon-cu%C3%A1l-es-la-mejor-opci%C3%B3n.jpg" />
          <Card.Body>
            <Card.Title>Photos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* <Form>
  <div className="mb-3">
    <Form.File id="formcheck-api-regular">
      <Form.File.Label>Regular file input</Form.File.Label>
      <Form.File.Input />
    </Form.File>
  </div>
</Form> */}
      </div>
    );
  }
}


export default Imagen;
