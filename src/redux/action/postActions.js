import { ActionTypes } from "../constants/action-types";
export const getPosts = (posts)=>{
    return {
        type:ActionTypes.SET_POSTS,
        payload:posts,
    }
}

export const getpostComments = (postcomments)=>{
    return {
        type:ActionTypes.GET_POST_COMMENTS,
        payload:postcomments,
    }
}