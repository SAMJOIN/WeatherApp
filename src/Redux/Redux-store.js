import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import Reducer from "./Reducer";


let store = createStore(Reducer, applyMiddleware(thunk));

window.store = store;

export default store;