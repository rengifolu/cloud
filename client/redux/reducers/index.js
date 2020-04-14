import { combineReducers } from "redux";
import contador from "./counterReducer";
import userLogin from "./postsReducer";

export default combineReducers({
  contador,
  userLogin,
});
