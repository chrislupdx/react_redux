import { createStore } from 'redux';

const initialState = {
  drink: [],
  chips: null,
  sandwich: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'Add drink':
      return { ...state, drink: action.payload };
    case 'Add sandwich':
      return { ...state, sandwich: action.payload };
    case 'add chips':
      return { ...state, chips: action.payload };
    case 'remove drink':
      return { ...state, drink: null };
    case 'remove sandwich':
      return { ...state, sandwich: null };
    case 'remove chips':
      return { ...state, chips: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'Add drink',
  payload: ['goatsweat ', 'jet fuel']
});
console.log('added drink', store.getState());


store.dispatch({
  type: 'Add sandwich',
  payload: 'sorrow'
});
console.log('added sandwich', store.getState());

store.dispatch({
  type: 'Add_chips',
  payload: 'cheese'
});
console.log('added chips', store.getState());

store.dispatch({
  type: 'remove drink',
  payload: 'goat sweat'
});
console.log('remove drink', store.getState());

store.dispatch({
  type: 'remove sandwhich',
  payloda: 'sorrow'
});
console.log('remove sandwhich', store.getState());

store.dispatch({
  type: 'remove chips',
  payload: 'cheese'
});
console.log('remove chips', store.getState());

console.log('last log', store.getState());
