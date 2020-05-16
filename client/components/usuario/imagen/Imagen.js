import React from "react";

import "../../../css/Coronavirus.css"
import { Card, Button } from "react-bootstrap";
import Collapse from 'react-bootstrap/Collapse'
import "../../../css/CuerpoBoton.css"

import BotonModal from './BotonModal'
import axios from "axios";

//import imagenPublic from "../../../../public/storage/imgs/image-1589506632260.jpeg";

class Imagen extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      imagenes: [],
      message: " ",
      contador: 1,

    };


    this.eliminar = this.eliminar.bind(this);

  }

  callAxios = () => {
    axios.get("/imagenes")
      .then(res => {
        //console.log("response",res)
        const imagenes = res.data.imagenes
        this.setState(
          { imagenes }
        );
      })
  }

  eliminar (id ) {
     
    console.log("id a eliminar : ", id)
   axios.post("/delete/:id",id)
      .then(res => {
        //console.log("response",res)
        const imagenes =  res.data.imagenes
        this.setState(
          {imagenes}
          );
      })
  }

  componentDidMount(e) {
    this.callAxios()

  }
  componentDidUpdate(prevProps, prevState) {
    //console.log('componentDidUpdate state',prepState.imagenes ,this.state.imagenes )
    /*console.log('componentDidUpdate props',prevProps,this.props ) */
    //console.log("fuera : ")

/*     console.log("prevState : ", prevState.imagenes)
    console.log("state : ", this.state.imagenes) */


    console.log("if : " , (prevState.imagenes.length !== this.state.imagenes.length))
    if (prevState.imagenes.length !== this.state.imagenes.length) {
      
      this.callAxios()
      console.log("dentro : ")
    }
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="CuerpoBoton">


        <BotonModal></BotonModal>


        {/*         <div >
         <ul>
           {this.state.imagenes.map( imagen => 
             <li key={imagen.id}>{imagen.name}</li>
           )}
         </ul>
      </div> */}


        <div className="Coronavirus">
          <h1> </h1>
          <ul>
            {this.state.imagenes.map(imagen => (
              <li>
                <Card  style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={imagen.imgUrl}
                  //src={imagenPublic}

                  />

{/*                   <Card.Text bg="grey">
                    Name : {imagen.name} <br />
                    id   : {imagen._id}
                  </Card.Text>
                  <Button
                    variant="danger"
                    type="submit"
                    onClick={this.eliminar()}
                  >delete</Button> */}
                    <Card.Body>
                    <Card.Title>{imagen.name} </Card.Title>
                    <Card.Text>
                      id : {imagen._id} <br />
                    </Card.Text>
                  </Card.Body>  
                  <Button variant="danger"  onClick={ () => this.eliminar(imagen._id) }>delete</Button>
                </Card>
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  }
}


export default Imagen;
