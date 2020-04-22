import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//importa inde  combineReducer
import rootReducer from "./redux/reducers";

/* store.subscribe(() => {
  console.log(store.getState());
}); */

//para redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//console.log(store.getState());
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
