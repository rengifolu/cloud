import React from "react";
import "../css/Userloged.css";
import axios from "axios";
import { connect } from "react-redux";

class PaginaUsuario extends React.Component {
  constructor(props) {
    super(props);
    console.log("desde constructor useerloged");
    console.log(props);
    this.state = {
      message: "Loading...",
    };
    this.componentDidMount = this.componentDidMount(this);
  }

  componentDidMount(e) {}

  render() {
    return (
      <div className="Userloged">
        <p>{this.state.message}</p>
        <p>
          {this.props.state.userLogin.user.first_name}{" "}
          {this.props.state.userLogin.user.last_name}
        </p>
        <p>{this.props.state.userLogin.user.email}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(PaginaUsuario);
