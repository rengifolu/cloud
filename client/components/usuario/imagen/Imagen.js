import React from "react";

// importamos connect para conectar componente con Store Global
import { connect } from "react-redux";
import { increment, decrement } from "../../../redux/actions/counterAction";
import { eliminar } from "../../../redux/actions/postsAction";

import "../../../css/Coronavirus.css";
import { Card, Button } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import "../../../css/CuerpoBoton.css";

import BotonModal from "./BotonModal";
import axios from "axios";

//import imagenPublic from "../../../../public/storage/imgs/image-1589506632260.jpeg";

class Imagen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: " ",
    };

    this.elimina = this.elimina.bind(this);
  }

  callAxios = () => {
    axios.get("/imagenes").then((res) => {
      //console.log("response",res)
      const imagenes = res.data.imagenes;
      this.setState({ imagenes });
    });
  };

  elimina(id) {
    console.log("id a eliminar : ", id);
    this.props
      .eliminar(id)
      .then((res) => this.props.decrement())
      .catch((err) => {
        console.log(err);
        this.setState({
          errors: { message: err.error },
        });
      });
  }

  componentDidMount(e) {
    this.callAxios();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("this.props.state.contador  : ", this.props.state.contador);
    console.log("prevProps.state.contador  : ", prevProps.state.contador);

    if (this.props.state.contador > prevProps.state.contador) {
      this.callAxios();
      console.log(
        "incremento : "
        //this.state.imagenes.length > prevState.imagenes.length
      );
    }
    if (this.props.state.contador < prevProps.state.contador) {
      this.callAxios();
      console.log(
        "decremento : "
        //this.state.imagenes.length > prevState.imagenes.length
      );
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const id = this.state;
    return (
      <div className="CuerpoBoton">
        <h1>{this.props.state.contador} Images</h1>

        <BotonModal userId={id}></BotonModal>

        <div className="Coronavirus">
          <h1> </h1>
          <ul>
            {this.state.imagenes.map((imagen) => (
              <li>
                <Card style={{ width: "18rem" }}>
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
                  <Button
                    variant="danger"
                    onClick={() => this.elimina(imagen._id)}
                  >
                    delete
                  </Button>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    eliminar: (id) => dispatch(eliminar(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Imagen);

//export default Imagen;
