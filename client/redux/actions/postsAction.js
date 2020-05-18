import axios from "axios";

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCES,
  FETCH_POSTS_ERROR,
  AUTH_LOGOUT,
  DELETE_POSTS,
} from "../reducers/postsReducer";

export function request() {
  return {
    type: FETCH_POSTS_REQUEST,
  };
}
export function succes(response) {
  console.log("desde succes");
  console.log(response);
  return {
    type: FETCH_POSTS_SUCCES,
    user: response,
  };
}
export function erro(error) {
  return {
    type: FETCH_POSTS_ERROR,
    error,
  };
}

export const doLogin = ({ email, password }) => {
  return (dispatch) => {
    dispatch(request());
    return axios
      .post("./login", { email: email, password: password })
      .then((response) => {
        if (response.status === 200) {
          dispatch(succes(response.data.user));
          console.log("desde dispatch");
          //localStorage.setItem("user", JSON.stringify(response.data.user));
          //console.log(response.data.user);
        } else {
          //revisar
          const error = new Error(response.error);
          throw error;
        }
      })
      .catch((error) => {
        dispatch(erro(error));
      });
  };
};

/* export const doLogOut = () => {
  return (dispatch) => {
    console.log("desde dispborrando localstorage ");
    localStorage.removeItem("user");
    //SetAuthToken(false);
    //al no pasarle nada como parametro los atributos del usuario se ponen a null
    dispatch(setCurrentUser({}));
  };
}; */

export const doLogOut = () => {
  return (dispatch) => {
    return axios
      .get("./logout")
      .then((response) => {
        dispatch(setCurrentUser({}));
        localStorage.removeItem("state");
      })
      .catch((error) => {
        dispatch(erro(error));
      });
  };
};

export const eliminar = (id) => {
  console.log("eliminar action");
  return (dispatch) => {
    return axios
      .post("/delete/" + id, id)
      .then((response) => {
        console.log(response);
        dispatch(deletePost(response));
      })
      .catch((error) => {
        dispatch(erro(error));
      });
  };
};

//this.props.decrement();
export function deletePost(response) {
  console.log(response);
  return {
    type: DELETE_POSTS,
    //imagenes: response.imagenes,
  };
}

export function setCurrentUser(user) {
  return {
    type: AUTH_LOGOUT,
    user,
  };
}
