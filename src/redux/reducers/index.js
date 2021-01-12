import { combineReducers } from "redux";
import counter from "./counter";
import platform from "./platform";

export default combineReducers({ counter, platform/*more reducers can be put here separated by comma*/ });
