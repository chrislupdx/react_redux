import { createStore } from 'redux';
import { ADD_DRINK, addDrink, 
  ADD_SANDWICH, addSanwich, 
  addChips, ADD_CHIPS,
  removeDrink, REMOVE_DRINK,
  removeSandwhich, REMOVE_SANDWHICH,
  removeChips, REMOVE_CHIPS
} from './lunchActions'; 

const initialState = {
  drink: ['goaturine'],
  chips: null,
  sandwich: null
};

const store = createStore(reducer);


function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case ADD_SANDWICH:
      return { ...state, sandwich: action.payload };
    case ADD_CHIPS:
      return { ...state, chips: action.payload };
    case REMOVE_DRINK:
      return { ...state, drink: null };
    case REMOVE_SANDWHICH:
      return { ...state, sandwich: null };
    case REMOVE_CHIPS:
      return { ...state, chips: null };
    default:
      return state;
  }
}

store.dispatch(addDrink('sorrow'));
console.log('added drink', store.getState());

store.dispatch(addSanwich('ruin'));
console.log('added sandwich', store.getState());

store.dispatch(addChips('longing'));
console.log('added chips', store.getState());

store.dispatch(removeDrink('goaturine'));
console.log('remove drink', store.getState());

store.dispatch(removeSandwhich('ugh'));
console.log('remove sandwhich', store.getState());

store.dispatch(removeChips('fine'));
console.log('remove chips', store.getState());
