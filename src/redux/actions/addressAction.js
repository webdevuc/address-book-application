import axios from "axios";
import {
  ADDRESS_FAIL,
  ADDRESS_REQUEST,
  ADDRESS_SUCCESS,
  url,
} from "../constants/constants";

export const getAddressList = () => async (dispatch) => {
  try {
    dispatch({ type: ADDRESS_REQUEST });
    const response = await axios.get(url);
    dispatch({ type: ADDRESS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADDRESS_FAIL });
  }
};
