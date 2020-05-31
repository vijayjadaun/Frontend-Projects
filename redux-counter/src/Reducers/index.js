import IncDec from "./IncDec";
import LoggedInfo from "./LoggedInfo";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: IncDec,
  logger: LoggedInfo,
});

export default allReducers;
