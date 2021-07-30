
import actionsTypes from "../constants/constants";
import { editAddress, findService } from "../../utils/filter.js";



const initialState = {
  services: {
    loading: true,
    data: [],
  },
  userActive: '',
  loginData: {},

  serviceDetails: { loading: true, data: {} },

  allProviders: {
    loading: true,
    data: [],
  },
  providerDetails: { loading: true, data: {} },
  providersByService: { loading: true, data: [] },
  servicesByProvider: [],
  providerEventsHours: {},
  providersAddresses: [],
  providersRating: [],
  provider_address_status: {},
  provider_address_update_status: {},
  provider_update_status: {},
  reservation_status: {},


  setStateSearch : "", 
  renderSearchBar: "",
  userActive: "",
  loginData: {},
  userData: {
    loading: true,
    data: {},
  },
  userAddresses: { loading: true, data: [] },
  userReservations: { loading: true, data: [] },


  allUsers: [],
  keyword: "",

};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    //GET SERVICES
    case actionsTypes.SET_SERVICES_REQUEST:
      return {
        ...state,
        services: { loading: true },
        allServices: { loading: false, data: action.payload },
      };
    case actionsTypes.SET_SERVICES_SUCCESS:
      return {
        ...state,
        allServices: { loading: false, data: action.payload },
        services: { loading: false, data: action.payload },
      };
    case actionsTypes.SET_SERVICES_FAIL:
      return {
        ...state,

        services: { loading: false, error: action.payload },
        allServices: { loading: false, error: action.payload },
      };
    case actionsTypes.LOGIN_SUCCESSFUL:
      window.localStorage.setItem(
        'loggedSpatifyApp',
        JSON.stringify(action.payload)
      );
      return {
        ...state,
        loginData: action.payload,
        userActive: action.payload.userFound
          ? action.payload.userFound.firstName
          : action.payload.providerFound.firstName,
      };

    case actionsTypes.LOGIN_FAIL:
      // window.localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        //error: action.payload.userActive,
      };
    case actionsTypes.LOGOUT:
      window.localStorage.setItem('loggedSpatifyApp', '');
      // window.localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        loginData: {},
        userActive: action.payload,
      };

    case actionsTypes.LOGIN_IN_SESSION:
      return {
        ...state,
        userActive: action.payload,
      };

    //GET SERVICES --> DETAILS
    case actionsTypes.GET_SERVICES_DETAILS_REQUEST:
      return {
        ...state,
        serviceDetails: { loading: true },
      };
    case actionsTypes.GET_SERVICES_DETAILS_SUCCES:
      return {
        ...state,
        serviceDetails: { loading: false, data: action.payload },
      };
    case actionsTypes.GET_SERVICES_DETAILS_FAIL:
      return {
        ...state,
        serviceDetails: { loading: false, error: action.payload },
      };

    //GET PROVIDERS BY SERVICE
    case actionsTypes.GET_PROVIDERS_BY_SERVICE_REQUEST:
      return {
        ...state,
        providersByService: { loading: true },
      };
    case actionsTypes.GET_PROVIDERS_BY_SERVICE_SUCCES:
      return {
        ...state,
        providersByService: { loading: false, data: action.payload },
      };
    case actionsTypes.GET_PROVIDERS_BY_SERVICE_FAIL:
      break;

    //GET SERVICES BY PROVIDER
    case actionsTypes.GET_SERVICES_BY_PROVIDER:
      return {
        ...state,
        servicesByProvider: action.payload,
      };
    case actionsTypes.GET_KEYWORD_SEARCHBAR:
      return {
        ...state,
        keyword: action.payload,
      };

    //GET PROVIDERS' DETAILS
    // case actionsTypes.GET_PROVIDER_DETAILS_REQ:
    //   return {
    //     ...state,
    //     providerDetails: { loading: true },
    //   };
    case actionsTypes.GET_ALL_PROVIDERS_SUCCES:
      return {
        ...state,
        allProviders: { loading: false, data: action.payload },
      }

    case actionsTypes.GET_PROVIDER_DETAILS_REQ:
      return {
        ...state,
        providerDetails: { loading: true },
      };
      
    case actionsTypes.GET_PROVIDER_DETAILS_SUCC:
      return {
        ...state,
        providerDetails: { loading: false, data: action.payload },
      };
    case actionsTypes.GET_PROVIDER_DETAILS_FAIL:

    //PROVIDERS' RATING
    case actionsTypes.GET_ALL_RATING_BY_PROVIDER:
      return {
        ...state,
        providersRating: action.payload,
      };
    case actionsTypes.SET_RATING_BY_USER:
      return {
        ...state,
        providersRating: action.payload,
      };

    //GET PROVIDERS ADDRESSES
    case actionsTypes.GET_PROVIDERS_ADDRESSES:
      return {
        ...state,
        providersAddresses: action.payload,
      };

    //SET PROVIDER ADDRESS
    case actionsTypes.SET_PROVIDER_ADDRESS:
      return {
        ...state,
        provider_address_status: { message: action.payload },
      };

    //SET PROVIDER ADDRESS UPDATE
    case actionsTypes.SET_PROVIDER_ADDRESS_UPDATE:
      return {
        ...state,
        provider_address_update_status: { message: action.payload },
      };

    //SET PROVIDER UPDATE
    case actionsTypes.SET_PROVIDER_UPDATE:
      return {
        ...state,
        provider_update_status: { message: action.payload },
      };

    //EVENTS HOURS PROVIDER
    case actionsTypes.GET_PROVIDERS_EVENTS_HOURS:
      return {
        ...state,
        providerEventsHours: action.payload,
      };

    ///SEARCH SERVICE BY NAME
    case actionsTypes.SEARCH_SERVICE_BY_NAME:
      return {
        ...state,
        services: { data: findService(state.allServices.data, action.payload) },
      };

    //SET RESERVATIONS FOR USERS
    case actionsTypes.SET_RESERVATION_STATUS:
      return {
        ...state,
        reservation_status: { loading: false, message: action.payload },
      };
    case actionsTypes.SET_RESERVATION_STATUS_LOADING:
      return {
        ...state,
        reservation_status: action.payload,
      };

    /// GET USER DATA (PROFILE)
    case actionsTypes.GET_USER_DATA_PROFILE_REQUEST:
      return {
        ...state,
        userData: { loading: true },
      };
    case actionsTypes.GET_USER_DATA_PROFILE_SUCCESS:
      return {
        ...state,
        userData: { loading: false, data: action.payload },
      };
    case actionsTypes.GET_USER_DATA_PROFILE_FAIL:
      return {
        ...state,
        userData: { loading: false, error: action.payload },
      };

    /// GET USER ADDRESES
    case actionsTypes.GET_USER_ADDRESSES_REQUEST:
      return {
        ...state,
        userAddresses: { loading: true },
      };
    case actionsTypes.GET_USER_ADDRESSES_SUCCESS:
      return {
        ...state,
        userAddresses: { loading: false, data: action.payload },
      };
    case actionsTypes.GET_USER_ADDRESSES_FAIL:
      return {
        ...state,
        userAddresses: { loading: false, error: action.payload },
      };

    //CREATE USER ADDRESS

    case actionsTypes.ADD_USER_ADDRESS_REQUEST:
      return {
        ...state,
        userAddresses: { ...state.userAddresses, loading: true },
      };
    case actionsTypes.ADD_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        userAddresses: {
          loading: false,
          data: [...state.userAddresses.data, action.payload.data],
        },
      };
    case actionsTypes.ADD_USER_ADDRESS_FAIL:
      return {
        ...state,
        userAddresses: { loading: false, error: action.payload },
      };

    //DETELE USER ADDRESS

    case actionsTypes.DELETE_USER_ADDRESS_REQUEST:
      return {
        ...state,
        userAddresses: { ...state.userAddresses, loading: true },
      };
    case actionsTypes.DELETE_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        userAddresses: {
          loading: false,
          data: state.userAddresses.data.filter(
            (a) => a._id !== action.payload
          ),
        },
      };
    case actionsTypes.DELETE_USER_ADDRESS_FAIL:
      return {
        ...state,
        userAddresses: { loading: false, error: action.payload },
      };

    //EDIT USER ADDRESS

    case actionsTypes.EDIT_USER_ADDRESS_REQUEST:
      return {
        ...state,
        userAddresses: { ...state.userAddresses, loading: true },
      };
    case actionsTypes.EDIT_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        userAddresses: {
          loading: false,
          data: editAddress(
            state.userAddresses.data,
            action.payload.addressId,
            action.payload.data.data
          ),
        },
      };
    case actionsTypes.EDIT_USER_ADDRESS_FAIL:
      return {
        ...state,
        userAddresses: { loading: false, error: action.payload },
      };

    //GET USER RESERVATIONS

    case actionsTypes.GET_USER_RESERVATIONS_REQUEST:
      return {
        ...state,
        userReservations: { loading: true },
      };
    case actionsTypes.GET_USER_RESERVATIONS_SUCCESS:
      return {
        ...state,
        userReservations: { loading: false, data: action.payload },
      };
    case actionsTypes.GET_USER_RESERVATIONS_FAIL:
      return {
        ...state,
        userReservations: { loading: false, error: action.payload },
      };
    ///GET ALL USERS
    case actionsTypes.GET_ALL_USERS_SUCCES:
      return {
        ...state,
        allProviders: { loading: false, data: action.payload },
      };
      
    ///RENDER SEARCHBAR 
    case actionsTypes.RENDER_SEARCHBAR:
      return {
        ...state,
        renderSearchBar: action.payload,
      };
    case actionsTypes.SET_SEARCHBAR:
      return {
        ...state,
        setStateSearch: action.payload,
      };

//DETELE USER RESERVATIOBS

case actionsTypes.DELETE_USER_RESERVATIONS_REQUEST:
  return {
    ...state,
    userReservations: { ...state.userReservations, loading: true },
  };
case actionsTypes.DELETE_USER_RESERVATIONS_SUCCESS:
  return {
    ...state, /////VER
    userAddresses: {
      loading: false,
      data: state.userAddresses.data.filter(
        (a) => a._id !== action.payload
      ),
    },
  };
case actionsTypes.DELETE_USER_ADDRESS_FAIL:
  return {
    ...state,
    userAddresses: { loading: false, error: action.payload },
  };






    default:
      return state;
  }
};

export default appReducer;
