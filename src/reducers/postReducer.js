import { ADD_POST, REMOVE_POST } from '../actions/postActions'; 

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, post: action.payload };
    case REMOVE_POST:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
} 
