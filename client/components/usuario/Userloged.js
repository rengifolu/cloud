import React from "react";
import "../../css/Userloged.css";
import axios from "axios";
import { connect } from "react-redux";
import Imagen from "../../components/usuario/Imagen";
import Video from "../../components/usuario/Video";

class Userloged extends React.Component {
  constructor(props) {
    super(props);
    console.log("desde constructor useerloged");
    console.log(props);
    this.state = {
      message: "Loading...",
    };
    this.componentDidMount = this.componentDidMount(this);
  }

  componentDidMount(e) {
    axios.get("/userloged").then((res) => {
      console.log("respuesta de userloged with auth");
      console.log(res.data);
      e.setState({ message: res.data });
    });
  }

  render() {
    return (
      <div className="Userloged">
        <p>{this.state.message}</p>
        <p>
          {this.props.state.userLogin.user.first_name}{" "}
          {this.props.state.userLogin.user.last_name}
        </p>
        <p>{this.props.state.userLogin.user.email}</p>

        <Imagen></Imagen>
        <Video></Video>
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
