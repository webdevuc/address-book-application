import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  drawerReducer,
  filterReducer,
  searchReducer,
} from "./reducers/filterReducer";

const reducer = combineReducers({
  search: searchReducer,
  filter: filterReducer,
  isOpen: drawerReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
