import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//importa inde  combineReducer
import rootReducer from "./redux/reducers";

/* store.subscribe(() => {
  console.log(store.getState());
}); */

//console.log(store.getState());
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
