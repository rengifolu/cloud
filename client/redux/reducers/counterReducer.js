const initialState = 0;

//nombres de constantes de acciones
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

//reducer
function counter(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
}

export default counter;
