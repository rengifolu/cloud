import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {loadState, saveState} from './localStorage'

//importa inde  combineReducer
import rootReducer from "./redux/reducers";


/* store.subscribe(() => {
  console.log('imprimo state');
  console.log(store.getState());
});  */

const initialData = loadState() || {}

//para redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//console.log(store.getState());
const store = createStore(
  rootReducer,initialData,
  composeEnhancers(applyMiddleware(thunk))
)



store.subscribe( function () {
  console.log('guardado');
  saveState(store.getState())
})

export default store;
