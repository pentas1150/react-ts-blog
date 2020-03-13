import { combineReducers } from "redux";
import LoginInfo from "./LoginInfo";

const rootReducer = combineReducers({
  LoginInfo
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
