const initialState = {
  isAuthenticated: false,
  user: {},
};

export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

const authReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        isAuthenticated: true,
        user: action.user,
      };
    case AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
