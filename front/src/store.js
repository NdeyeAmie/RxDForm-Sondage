import {createStore, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./redux/reducers";

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):null


const initialState = {   
    userLogin : {userInfo:userInfoFromStorage},
};
const middleware =[thunk]

// const store = createStore(rootReducers,initialState,applyMiddleware(thunk),);
const store = createStore(rootReducers,initialState,composeWithDevTools(applyMiddleware(...middleware)));


export default store;