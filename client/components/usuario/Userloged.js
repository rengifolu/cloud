import React from "react";
import "../../css/Userloged.css";
import axios from "axios";
import { connect } from "react-redux";



 


import "../../css/BotonHomeUsuario.css"


class Userloged extends React.Component {
  constructor(props) {
    super(props);
    console.log("desde constructor useerloged");
    console.log(props);
    this.state = {
      message: "Loading...",
    };
    this.componentDidMount = this.componentDidMount(this);
    this.onClick = this.onClick.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(e) {
    axios.get("/userloged").then((res) => {
      console.log("respuesta de userloged with auth");
      console.log(res.data);
      e.setState({ message: res.data });
    });
  }

  handleClick() {
    console.log('Se hizo click');
  }

  onClick = (e) => {
    //console.log("onClick");
    //console.log(e)
    //console.log(e.value)
    console.log(e.target.value)
    //this.props.history.push("/imagen")
    //`https://www.countryflags.io/${pais.countryInfo.iso2}/shiny/64.png`
    //src={`https://www.countryflags.io/${pais.countryInfo.iso2}/shiny/64.png`

    //this.props.history.push("/"+e.target.value)

    switch(e.target.value) {
      case 'Imagen':
        return this.props.history.push("/"+e.target.value.toLowerCase());
      case 'Video':
        return this.props.history.push("/"+e.target.value.toLowerCase());;
      case 'Agenda':
        return this.props.history.push("/"+e.target.value.toLowerCase());
      case 'Archivo':
        return this.props.history.push("/"+e.target.value.toLowerCase());
      case 'Nota':
        return this.props.history.push("/"+e.target.value.toLowerCase());
      default:
        return 'default';
    }


  };
  render() {
    return (
      <div className="Userloged">
        <p>{this.state.message}</p>
        <p>
          {this.props.state.userLogin.user.first_name}{" "}
          {this.props.state.userLogin.user.last_name}
        </p>
        <p>{this.props.state.userLogin.user.email}</p>


        <button 
            className="BotonHomeUsuario" 
            value="Imagen"
            onClick={this.onClick}
            >Imagen</button>
        <button 
            className="BotonHomeUsuario" 
            value="Video"
            onClick={this.onClick}
            >Video</button>
        <button 
            className="BotonHomeUsuario" 
            value="Agenda"
            onClick={this.onClick}
            >Agenda</button>
        <button 
            className="BotonHomeUsuario" 
            value="Archivo"
            onClick={this.onClick}
            >Archivo</button>
        <button 
            className="BotonHomeUsuario" 
            value="Nota"
            onClick={this.onClick
            }>Nota</button>

        {/* <h1>1 : {this.props.state.userLogin.isAuthenticated.toString()}</h1> */}
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Userloged);
