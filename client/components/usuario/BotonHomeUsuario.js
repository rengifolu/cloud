import React from "react";
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../../css/BotonHomeUsuario.css"

/*

boton comun que se presenta en pagina principal de cada usuario
*/

class BotonHomeUsuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      url:""
    };
  }

  componentDidMount(e) {

  }

  render() {
    return (
 
 <button 
  class="BotonHomeUsuario"
  >
    {this.props.titulo}
    {this.props.url}
 </button> 
 
    );
  }
}


export default BotonHomeUsuario;
