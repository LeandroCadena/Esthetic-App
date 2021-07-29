const actionsTypes = {
  ///LOGIN
  LOGIN_SUCCESSFUL: "LOGIN_SUCCESSFUL",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT: "LOGOUT",
  ///RESERVATION
  SET_RESERVATION_STATUS: "SET_RESERVATION_STATUS",
  SET_RESERVATION_STATUS_LOADING: "SET_RESERVATION_STATUS_LOADING",
  ///SERVICES
  SET_SERVICES_REQUEST: "SET_SERVICES_REQUEST",
  SET_SERVICES_SUCCESS: "SET_SERVICES_SUCCES",
  SET_SERVICES_FAIL: "SET_SERVICES_FAIL",
  GET_SERVICES_DETAILS_REQUEST: "GET_SERVICES_DETAILS_REQUEST",
  GET_SERVICES_DETAILS_SUCCES: "GET_SERVICES_DETAILS_SUCCES",
  GET_SERVICES_DETAILS_FAIL: "GET_SERVICES_DETAILS_FAIL",
  SEARCH_SERVICE_BY_NAME: "SEARCH_SERVICE_BY_NAME:",
  ///PROVIDERS
  GET_PROVIDERS_BY_SERVICE_REQUEST: "GET_PROVIDERS_BY_SERVICE_REQUEST",
  GET_PROVIDERS_BY_SERVICE_SUCCES: "GET_PROVIDERS_BY_SERVICE_SUCCES",
  GET_PROVIDERS_BY_SERVICE_FAIL: "GET_PROVIDERS_BY_SERVICE_FAIL",
  GET_PROVIDER_CALENDAR: "GET_PROVIDER_CALENDAR",
  GET_PROVIDER_DETAILS_REQ: "GET_PROVIDER_DETAILS_REQ",
  GET_PROVIDER_DETAILS_SUCC: "GET_PROVIDER_DETAILS_SUCC",
  GET_PROVIDER_DETAILS_FAIL: "GET_PROVIDER_DETAILS_FAIL",
  GET_SERVICES_BY_PROVIDER: "GET_SERVICES_BY_PROVIDER",
  GET_ALL_RATING_BY_PROVIDER: "GET_ALL_RATING_BY_PROVIDER",
  GET_RATING_BY_PROVIDER: "GET_RATING_BY_PROVIDER",
  SET_RATING_BY_USER: "SET_RATING_BY_USER",
  GET_PROVIDERS_ADDRESSES: "GET_PROVIDERS_ADDRESSES",
  SET_PROVIDER_ADDRESS: "SET_PROVIDER_ADDRESS",
  SET_PROVIDER_ADDRESS_UPDATE: "SET_PROVIDER_ADDRESS_UPDATE",
  SET_PROVIDER_UPDATE: "SET_PROVIDER_UPDATE",
  GET_ALL_PROVIDERS: "GET_ALL_PROVIDERS",
  GET_ALL_PROVIDERS_SUCCES: "GET_ALL_PROVIDERS_SUCCES",
  GET_ALL_PROVIDERS_FAIL: "GET_ALL_PROVIDERS_FAIL",
  GET_PROVIDERS_EVENTS_HOURS: "GET_PROVIDERS_EVENTS_HOURS",
  /*   GET_PROVIDER_BY_NAME: "GET_PROVIDER_BY_NAME",
  GET_PROVIDER_BY_NAME_FAIL:"GET_PROVIDER_BY_NAME_FAIL" */
  
  
  /// USER
  GET_ALL_USERS:"GET_ALL_USERS",
  GET_ALL_USERS_SUCCES: "GET_ALL_USERS_SUCCES",
  GET_ALL_USERS_FAIL: "GET_ALL_USERS_FAIL",
  GET_USER_DATA_PROFILE_REQUEST: "GET_USER_DATA_PROFILE_REQUEST",
  GET_USER_DATA_PROFILE_SUCCESS: "GET_USER_DATA_PROFILE_SUCCESS",
  GET_USER_DATA_PROFILE_FAIL: "GET_USER_DATA_PROFILE_FAIL",
  GET_USER_RESERVATIONS_REQUEST: "GET_USER_RESERVATIONS_REQUEST",
  GET_USER_RESERVATIONS_SUCCESS: "GET_USER_RESERVATIONS_SUCCESS",

  GET_USER_RESERVATIONS_FAIL: "GET_USER_RESERVATIONS_FAIL",
  DELETE_USER_RESERVATIONS_REQUEST: "DELETE_USER_RESERVATIONS_REQUEST",
  DELETE_USER_RESERVATIONS_SUCCESS: "DELETE_USER_RESERVATIONS_SUCCESS",
  DELETE_USER_RESERVATIONS_FAIL: "DELETE_USER_RESERVATIONS_FAIL",
  
  ///SEARCH BAR
  GET_KEYWORD_SEARCHBAR: "GET_KEYWORD_SEARCHBAR",
  SORT_BY_ALPHABET:"SORT_BY_ALPHABET",

  GET_USER_ADDRESSES_REQUEST: "GET_USER_ADDRESSES_REQUEST",
  GET_USER_ADDRESSES_SUCCESS: "GET_USER_ADDRESSES_SUCCESS",
  GET_USER_ADDRESSES_FAIL: "GET_USER_ADDRESSES_FAIL",
  DELETE_USER_ADDRESS_REQUEST: "DELETE_USER_ADDRESS_REQUEST",
  DELETE_USER_ADDRESS_SUCCESS: "DELETE_USER_ADDRESS_SUCCESS",
  DELETE_USER_ADDRESS_FAIL: "DELETE_USER_ADDRESS_FAIL",
  ADD_USER_ADDRESS_REQUEST: "ADD_USER_ADDRESS_REQUEST",
  ADD_USER_ADDRESS_SUCCESS: "ADD_USER_ADDRESS_SUCCESS",
  ADD_USER_ADDRESS_FAIL: "ADD_USER_ADDRESS_FAIL",
  EDIT_USER_ADDRESS_REQUEST: "EDIT_USER_ADDRESS_REQUEST",
  EDIT_USER_ADDRESS_SUCCESS: "EDIT_USER_ADDRESS_SUCCESS",
  EDIT_USER_ADDRESS_FAIL: "EDIT_USER_ADDRESS_FAIL",

  POST_USER_DATA_PROFILE_REQUEST: "POST_USER_DATA_PROFILE_REQUEST",
  POST_USER_DATA_PROFILE_SUCCESS: "POST_USER_DATA_PROFILE_SUCCESS",
  POST_USER_DATA_PROFILE_FAIL: "POST_USER_DATA_PROFILE_FAIL",
  
};

export default actionsTypes;
