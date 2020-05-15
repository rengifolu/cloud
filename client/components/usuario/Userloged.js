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
      case 'Images':
        return this.props.history.push("/"+e.target.value.toLowerCase());
      case 'Videos':
        return this.props.history.push("/"+e.target.value.toLowerCase());;
      case 'Diary':
        return this.props.history.push("/"+e.target.value.toLowerCase());
      case 'Files':
        return this.props.history.push("/"+e.target.value.toLowerCase());
      case 'Notes':
        return this.props.history.push("/"+e.target.value.toLowerCase());
      default:
        return 'default';
    }


  };
  render() {
    return (
      <div className="Userloged">
        {/* <p>{this.state.message}</p> */}
        <p>
          {this.props.state.userLogin.user.first_name}{" "}
          {this.props.state.userLogin.user.last_name}
        </p>
        <p>{this.props.state.userLogin.user.email}</p>


        <button 
            className="BotonHomeUsuario" 
            value="Images"
            onClick={this.onClick}
            >Images</button>
        <button 
            className="BotonHomeUsuario" 
            value="Videos"
            onClick={this.onClick}
            >Videos</button>
        <button 
            className="BotonHomeUsuario" 
            value="Diary"
            onClick={this.onClick}
            >Diary</button>
        <button 
            className="BotonHomeUsuario" 
            value="Files"
            onClick={this.onClick}
            >Files</button>
        <button 
            className="BotonHomeUsuario" 
            value="Notes"
            onClick={this.onClick
            }>Notes</button>

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
