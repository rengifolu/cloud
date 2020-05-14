import React from "react";
import Modal from "react-bootstrap/Modal";

import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";


class BotonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      description:'',
      show:false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.upload = this.upload.bind(this);
 
  }
  handleClose (e)  {
    console.log('oculta');
    this.setState({
      show:false
    })
  }
  upload (e)  {
    console.log(' desde aqui subimos y cerramos modal')
    console.log('nombre',this.state.name);
    console.log('description',this.state.description);
    //aqui poner llamada a axios o mediante redux
    this.setState({
      show:false
    })
  }

  handleShow (e)  {
    console.log('aparece');
    this.setState({
      show:true
    })
  }
  

  handleSubmit(event) {
    event.preventDefault();
  }

 
  render(){
    const { name, show, description } = this.state;
      return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            add Image
          </Button>
    

              <Form onSubmit={this.handleSubmit}>
              <Modal show={show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Upload Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>Keep your images in a safe place!

              <Form.File id="formcheck-api-regular">
                <Form.File.Label></Form.File.Label>
                <Form.File.Input />
              </Form.File> 


              </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={this.upload}>
                    Upload
                  </Button>
                </Modal.Footer>
            </Modal> 
                </Form>

 
        </>
      );

 
  }
}

 
export default BotonModal;
