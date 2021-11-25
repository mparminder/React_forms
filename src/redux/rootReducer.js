import { combineReducers } from "redux";
import counterReducer from "./counter/counterreducer";
import employeeReducer from "./employee/employeereducer";
import loginReducer from "./auth/authreducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  employee: employeeReducer,
  login: loginReducer,
});

export default rootReducer;
