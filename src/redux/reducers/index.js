import { combineReducers } from "redux";
import {  postsReducer ,postCommentsReducer} from "./postsReducer";

const reducers= combineReducers({
    allPosts:postsReducer,
    postComments:postCommentsReducer,

})
export default reducers;