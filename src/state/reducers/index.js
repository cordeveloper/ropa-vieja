import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import productReducer from "./productReducer";

const allReducers = combineReducers({
    products: productReducer,
    search: searchReducer
});


export default allReducers;