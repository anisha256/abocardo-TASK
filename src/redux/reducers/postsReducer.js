import { ActionTypes } from "../constants/action-types";

const initialState = {
  posts: [],
};
const commentState ={
  postcomments:[],
}

export const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return { ...state, posts: payload };

    default:
      return state;
  }
};

export const postCommentsReducer = (state = commentState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_POST_COMMENTS:
      return { ...state, postcomments: payload };

    default:
      return state;
  }
};