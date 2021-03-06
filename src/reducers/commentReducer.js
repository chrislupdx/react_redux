import { ADD_COMMENT, DELETE_COMMENT } from '../actions/commentAction';
import { REMOVE_POST } from '../actions/postActions';

const deletePostComments = (state, id) => {
  const newState = { ...state };
  delete newState[id];
  return newState;
};

export default function reducer(state = {}, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [action.payload.postId] : [
          ...(state[action.payload.postId] || []),
          action.payload.comment
        ]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.postId]: [
          ...state[action.payload.postId].slice(0, action.payload.commentId),
          ...state[action.payload.postId].slice(action.payload.commentId + 1),
        ]
      };
    case REMOVE_POST:
      return deletePostComments(state, action.payload);
    default:
      return state;
  }
}
