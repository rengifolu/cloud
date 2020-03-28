/*script que permite proteger la rutas
  para cuando un usuario se haya logado
  si no tieen token le pide logarse */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false
      };
    }

    componentDidMount() {
      axios
        .get("./checkToken")
        .then(res => {
          if (res.status === 200) {
            console.log("logado");
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        //si no logado vuelve a login
        return <Redirect to="/login" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  };
}
