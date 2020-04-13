import axios from "axios";

import { AUTH_LOGIN, AUTH_LOGOUT } from "../reducers/postsReducer";

export function setCurrentUser(user) {
  return {
    type: AUTH_LOGIN,
    user,
  };
}

export const doLogin = ({ email, password }) => {
  return (dispatch) => {
    return axios.post("./login", { email, password }).then((response) => {
      //const token = response.data.token;
      console.log(response.data.user);
      let user = response.data.user;
      //user.email = email;
      //user.token = token;

      //localStorage.setItem("user", JSON.stringify(user));

      //SetAuthToken(token);
      dispatch(setCurrentUser(user));
    });
  };
};

export const doLogout = () => ({
  type: AUTH_LOGOUT,
});

/* export const doLogin = ({ email, password }) => {
  console.log("aqui");
  console.log(email);
  console.log(password);
  return (dispatch) => {
    var payload = {
      email: email,
      password: password,
    };
    return axios
      .post("./login", payload)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        if (response.status === 200) {
          dispatch({
            type: AUTH_LOGIN,
            datosUsuario: response.data.user,
          });
          this.props.history.push("/userloged");
          console.log("este 5 : ", this.state.datosUsuario);
        } else {
          const error = new Error(response.error);
          throw error;
        }
      })
      .catch((error) => {
        console.log("There is no user with the given username and password");
        console.log(error);
      });
  };
}; */

/* export const doLogin = () => {
  console.log("aqui");
  return {
    type: AUTH_LOGIN,
  };
}; */

/*export const doLogin = (email, password) => () => {
  return (dispatch) => {
    console.log("response.data 1 ");
    dispatch({ type: FETCH_POSTS_REQUEST });

    var payload = {
      email: email,
      password: password,
    };
    axios
      .post("./login", payload)
      .then((response) => {
        console.log("response.data 2 ");
        console.log(response.data);
        console.log(response.status);
        dispatch({
          type: FETCH_POSTS_SUCCES,
          username: response.username,
          password: response.password,
          datosUsuario: response.data.user,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_POSTS_ERROR,
          error: error.toString(),
        });
      });
  };
};*/

/* export const userEnter = (payload) => {
    return {
        type: USER_ENTER,
        loading: false,
         payload: {
             data: payload
         }
    }
}; */
