import axios from "axios";

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCES,
  FETCH_POSTS_ERROR,
  AUTH_LOGOUT,
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

export const doLogOut = () => ({
  type: AUTH_LOGOUT,
});
