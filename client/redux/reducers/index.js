import { combineReducers } from "redux";
import counter from "./counterReducer";
import userLogin from "./postsReducer";

export default combineReducers({
  counter,
  userLogin,
});
