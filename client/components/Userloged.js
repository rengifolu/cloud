import React from "react";
import "../css/Userloged.css";
import axios from "axios";
import { connect } from "react-redux";

class Userloged extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      message: "Loading...",
    };
    this.componentDidMount = this.componentDidMount(this);
  }

  componentDidMount(e) {
    axios.get("/userloged").then((res) => {
      e.setState({ message: res.data });
    });
  }

  render() {
    return (
      <div className="Userloged">
        <h1>Userloged</h1>
        <p>{this.state.message}</p>

        <p>{this.props.state.counter}</p>
        {/* <h1>{this.props.state.userlogin.posts.[0]}</h1> */}
        <h1>{this.props.state.payload.response.data.user.email}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
    //contador: state.counter,
  };
};
/*
const mapDispatchToProps = (dispatch) => {
  return {
    /*      increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),  
    doLogin: (state) => dispatch(doLogin(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login); */

const mapDispatchToProps = (dispatch) => {
  return {
    //doLogin: (state) => dispatch(doLogin(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Userloged);
