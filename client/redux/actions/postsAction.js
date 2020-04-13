import axios from "axios";

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCES = "FETCH_POSTS_SUCCES";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

//import { AUTH_LOGIN, AUTH_LOGOUT } from "../reducers/postsReducer";

export function request() {
  return {
    type: FETCH_POSTS_REQUEST,
  };
}
export function succes(response) {
  return {
    type: FETCH_POSTS_SUCCES,
    payload: {
      response,
    },
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
    //console.log(dispatch);
    dispatch(request());
    return axios
      .post("./login", { email: email, password: password })
      .then((response) => {
        if (response.status === 200) {
          dispatch(succes(response));
          console.log("desde dispatch");
          console.log(response.data.user);
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
