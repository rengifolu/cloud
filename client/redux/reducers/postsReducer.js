import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCES,
  FETCH_POSTS_ERROR,
} from "./postsReducer";

const initialState = {
  post: [],
  isFetching: false,
  error: null,
};

const posts = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state, // Preserve states that are unchanged
        isFetching: true,
      };
    case FETCH_POSTS_SUCCES:
      return {
        ...state, // Preserve states that are unchanged
        isFetching: false,
        post: action.payload.posts,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state, // Preserve states that are unchanged
        isFetching: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default posts;
