const ADD_DRINK = 'Add Drink';
const addDrink = drink => {
  return {
    type: ADD_DRINK,
    payload: drink
  };
};

const ADD_SANDWICH = 'Add sandwich';
const addSanwich = sandwich => {
  return {
    type: ADD_SANDWICH,
    payload: sandwich
  };
};

const ADD_CHIPS = 'Add chips';
const addChips = chips => {
  return {
    type: ADD_CHIPS,
    payload: chips
  };
};

const REMOVE_DRINK = 'remove drink';
const removeDrink = drink => {
  return {
    type: REMOVE_DRINK,
    payload: drink
  };
};

const REMOVE_SANDWHICH = 'remove sandwhich';
const removeSandwhich = sandwich => {
  return {
    type: REMOVE_SANDWHICH,
    payload: sandwich
  };
};

const REMOVE_CHIPS = 'remove chips';
const removeChips = chips => {
  return {
    type: REMOVE_CHIPS,
    payload: chips
  };
};

export { 
  addDrink, ADD_DRINK,
  addSanwich, ADD_SANDWICH,
  addChips, ADD_CHIPS,
  removeDrink, REMOVE_DRINK,
  removeSandwhich, REMOVE_SANDWHICH,
  removeChips, REMOVE_CHIPS
};
