import { combineReducers } from "redux";
import session from "./session";

const rootReducer = combineReducers({
  session
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
