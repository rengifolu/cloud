import { INCREMENT, DECREMENT } from "../reducers/counterReducer";
//actions
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

//store.dispatch(increment());
//store.dispatch(decrement());

// store.dispatch({
//   type: "INCREMENT",
// });
