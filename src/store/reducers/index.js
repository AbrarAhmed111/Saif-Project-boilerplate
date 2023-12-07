// Root Reducer

import { combineReducers } from "redux";
import authUserReducer from "./authUser";
import userReducer from "./authReducer";

export let rootReducer = combineReducers({
    authUser: authUserReducer,
    user: userReducer,

});

export default rootReducer;
