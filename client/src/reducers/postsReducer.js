import * as actionTypes from "../redux/postConstants";

export const getPostsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS_REQUEST:
      return {
        loading: true,
        posts: [],
      };
    case actionTypes.GET_POSTS_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
      };
    case actionTypes.GET_POSTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getPostDetailsReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_POST_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_POST_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_POST_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_POST_DETAILS_RESET:
      return {
        post: {},
      };
    default:
      return state;
  }
};