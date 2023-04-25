import { SEARCH_TEXT, FILTER_TEXT, OPEN_DRWAER } from "../constants/constants";

export const searchReducer = (state = { search: "" }, action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return {
        search: action.payload,
      };
    default:
      return state;
  }
};
export const filterReducer = (state = { filterText: "ASC" }, action) => {
  switch (action.type) {
    case FILTER_TEXT:
      return {
        filterText: action.payload,
      };
    default:
      return state;
  }
};
export const drawerReducer = (state = { isOpen: false }, action) => {
  switch (action.type) {
    case OPEN_DRWAER:
      return {
        isOpen: action.payload,
      };
    default:
      return state;
  }
};
