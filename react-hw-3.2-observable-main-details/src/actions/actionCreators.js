import {
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_FAILURE,
    FETCH_SERVICES_SUCCESS,
    GET_SERVICE_REQUEST,
    GET_SERVICE_SUCCESS,
    GET_SERVICE_FAILURE,
  } from './actionTypes';
  
  export const fetchServicesRequest = () => ({
    type: FETCH_SERVICES_REQUEST,
  });
  
  export const fetchServicesFailure = error => ({
    type: FETCH_SERVICES_FAILURE,
    payload: {
      error,
    },
  });
  
  export const fetchServicesSuccess = items => ({
    type: FETCH_SERVICES_SUCCESS,
    payload: {
      items,
    },
  });

  export const getServiceRequest = (id) => ({
    type: GET_SERVICE_REQUEST,
    payload: {
      id,
    }
  });

  export const getServiceSuccess = item => ({
    type: GET_SERVICE_SUCCESS,
    payload: {
      item,
    },
  });

  export const getServiceFailure = error => ({
    type: GET_SERVICE_FAILURE,
    payload: {
      error,
    },
  });
  