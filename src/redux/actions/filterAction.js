import { SEARCH_TEXT, FILTER_TEXT, OPEN_DRWAER } from "../constants/constants";

export const searchText = (data) => async (dispatch) => {
  dispatch({
    type: SEARCH_TEXT,
    payload: data,
  });
};
export const filterResult = (data) => async (dispatch) => {
  dispatch({
    type: FILTER_TEXT,
    payload: data,
  });
};
export const openDrawer = (data) => async (dispatch) => {
  dispatch({
    type: OPEN_DRWAER,
    payload: data,
  });
};
