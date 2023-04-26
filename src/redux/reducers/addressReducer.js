import {
  ADDRESS_FAIL,
  ADDRESS_REQUEST,
  ADDRESS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/constants";

export const getAddressReducer = (
  state = { data: [], loading: true },
  action
) => {
  switch (action.type) {
    case ADDRESS_REQUEST:
      return {
        loading: true,
      };
    case ADDRESS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case ADDRESS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
