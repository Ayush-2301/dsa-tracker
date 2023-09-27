import { combineReducers } from "@reduxjs/toolkit";
import authReduer from "./authReducer";

const rootReducer=combineReducers({
    auth:authReduer
})
export default rootReducer;