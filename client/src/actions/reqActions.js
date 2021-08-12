import * as actionTypes from "../redux/postConstants";
import axios from "axios";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_POSTS_REQUEST });

    const { data } = await axios.get("/requests/");

    dispatch({
      type: actionTypes.GET_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPostDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: actionTypes.GET_POST_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/requests/${id}`);
  
      dispatch({
        type: actionTypes.GET_POST_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_POST_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };