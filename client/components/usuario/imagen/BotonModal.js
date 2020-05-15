import React from "react";
import Modal from "react-bootstrap/Modal";

import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";


import axios from "axios";



class BotonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image:'',
      show:false
    };
    this.handleClose = this.handleClose.bind(this);
    //this.handleClose2 = this.handleClose2.bind(this);
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
    //console.log('image',this.state.image);
    //console.log('description',this.state.description);
    const formData = new FormData();
     
    formData.append("image", this.state.image,this.state.image.name);

      axios.post("/image",formData)
      .then(res => {
        console.log("response",res)
      }) 

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

  fileSelectedHandler = event => {
    console.log(event.target.files[0])
    this.setState({
      image:event.target.files[0]
    })
  }


 /*  handleClose2 (e)  {
    this.props.history.push("/imagen")
    this.setState({
      show:false
    })
    
  } */

  render(){
    const { image, show, description } = this.state;
      return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            add Image
          </Button>
    

              <Form onSubmit={this.handleSubmit} enctype="multipart/form-data">
              <Modal show={show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Upload Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>Keep your images in a safe place!
              <Form.File id="formcheck-api-regular">
                <Form.File.Label></Form.File.Label>
                <Form.File.Input type="file"   onChange={this.fileSelectedHandler}/>
              </Form.File>  




                  </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose}>
                        Close
                      </Button>
                      <Button 
                        variant="primary" 
                        type="submit" 
                        accept="image/*"
                        onClick={this.upload}>
                        Upload
                      </Button>
                    </Modal.Footer>
                </Modal> 
                </Form>

{/* ////////////////////////// */}
{/*                 <Button variant="primary" onClick={this.handleShow}>
                add Image
                </Button>
    
                <Modal show={show} onHide={this.handleClose}>
                <Form   action="/image" enctype="multipart/form-data" method="POST">
                  <Modal.Header closeButton>
                    <Modal.Title>Upload Image</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Keep your images in a safe place!
                  </Modal.Body>

 
                  <Form.File id="formcheck-api-regular">
                    <Form.File.Label></Form.File.Label>
                    <Form.File.Input type="file" name="image"></Form.File.Input>
                  </Form.File> 


   
                  
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit" value="upload file" onClick={this.handleClose}>
                      Upload
                    </Button>
                  </Modal.Footer>
                  </Form> 
                </Modal>  */}
 

        </>
      );

 
  }
}

 
export default BotonModal;
