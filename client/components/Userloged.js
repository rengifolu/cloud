import React from "react";
import "../css/Userloged.css";
import axios from "axios";

class Userloged extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      user_name: "",
      email: "",
      message: "Loading..."
    };
    this.componentDidMount = this.componentDidMount(this);
  }

  componentDidMount(e) {
    axios.get("/userloged").then(res => {
      e.setState({ message: res.data });
    });
  }
  render() {
    return (
      <div className="Userloged">
        <h1>Userloged</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Userloged;
