import * as actionTypes from "../redux/offerConstants";
import axios from "axios";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_POSTS_REQUEST });

    const { data } = await axios.get("/offers/");

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
  
      const { data } = await axios.get(`/offer/${id}`);
  
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