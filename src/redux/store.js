import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  drawerReducer,
  filterReducer,
  searchReducer,
} from "./reducers/filterReducer";
import { getAddressReducer } from "./reducers/addressReducer";

const reducer = combineReducers({
  search: searchReducer,
  filter: filterReducer,
  isOpen: drawerReducer,
  addressList: getAddressReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
