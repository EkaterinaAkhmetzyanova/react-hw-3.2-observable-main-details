import {
    GET_SERVICE_REQUEST,
    GET_SERVICE_SUCCESS,
    GET_SERVICE_FAILURE,
  } from '../actions/actionTypes'
  
  const initialState = {
    item: null,
    loading: false,
    error: null,
  };
  
  export default function serviceCardReducer(state = initialState, action) {
    switch (action.type) {
      case GET_SERVICE_REQUEST:
        return{...state, item: null, loading: true, error: null};
      case GET_SERVICE_SUCCESS:
        const {item} = action.payload;
        return {
          ...state,
          item,
          loading: false,
          error: null,
        };
      case GET_SERVICE_FAILURE: {
        const {error} = action.payload;
        return {
          ...state,
          loading: false,
          error,
        };
      }
      default:
        return state;
    }
  }