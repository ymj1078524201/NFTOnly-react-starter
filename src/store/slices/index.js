import { combineReducers } from "redux";

import counterSliceReducer from "./counterSlice";

export default combineReducers({
  counterSliceReducer,
});
