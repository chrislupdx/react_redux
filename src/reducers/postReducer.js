import { ADD_POST, REMOVE_POST } from '../actions/postActions'; 

const initialState = {
  post: {
    title: null,
    body: null,
  },
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, post: action.payload };
    case REMOVE_POST:
      return { ...state, post: action.payload };
    default:
      return state;
  }
} 
