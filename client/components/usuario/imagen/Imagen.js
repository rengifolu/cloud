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
 
    };
 
  }

callAxios = ()=>{
  axios.get("/imagenes")
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
  componentDidUpdate(prevProps,prepState ,snapShot) {
     //console.log('componentDidUpdate state',prepState.imagenes ,this.state.imagenes )
    /*console.log('componentDidUpdate props',prevProps,this.props ) */
    
 
     if (prepState.imagenes !== this.state.imagenes ) {
      this.callAxios()

    }  

/*     if (this.props.imagenesId !== prevProps.imagenesId) {
      this.callAxios()
    } */
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
              <Card style={{ width: "18rem" }}>
                 <Card.Img
                  variant="top"
                  src={imagen.imgUrl}
                  //src={imagenPublic}
                  
                />
 {/*                <Card.Body>
                  <Card.Title>{imagen.name} </Card.Title>
                  <Card.Text>
                    Name : {imagen.name} <br />
 
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body> */}
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
