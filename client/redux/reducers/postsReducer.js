const initialState = {
  isAuthenticated: false,
  user: {},
  error: null,
};

export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCES = "FETCH_POSTS_SUCCES";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

const posts = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state, // Preserve states that are unchanged
        isAuthenticated: true,
      };
    case FETCH_POSTS_SUCCES:
      return {
        ...state, // Preserve states that are unchanged
        isAuthenticated: true,
        user: action.user,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state, // Preserve states that are unchanged
        isAuthenticated: true,
        error: action.error,
      };
    case AUTH_LOGOUT:
      return {
        ...state, // Preserve states that are unchanged
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default posts;
