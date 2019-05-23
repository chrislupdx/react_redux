import { ADD_POST, addPost, REMOVE_POST, removePost } from './actions/postActions'; 

const initialState = {
  post: {
    title: null,
    body: null,
  },
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, post: action.payload };
    case REMOVE_POST:
      return { ...state, post: action.payload };
    default:
      return state;
  }
}
  
export {
  reducer
};
