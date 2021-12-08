import {combineReducers} from "redux";
import articleReducer from "./articleReducer";
import categoryReducer from "./categoryReducer";
import departmentReducer from "./departmentReducer";

const reducers = combineReducers({
  articles: articleReducer,
  categories: categoryReducer,
  departments: departmentReducer
});

export default reducers;

