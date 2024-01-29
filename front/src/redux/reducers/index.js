import { combineReducers } from "redux";
import { userLoginReducer,userRegisterReducer, userDetailsReducer } from "./userReducers";


const rootReducers = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,

})



export default rootReducers;