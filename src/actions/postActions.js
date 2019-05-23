export const ADD_POST = 'Add post';
export const addPost = post => {
  return {
    type: ADD_POST,
    payload: post
  };
};

export const REMOVE_POST = 'remove post';
export const removePost = post => {
  return {
    type: REMOVE_POST,
    payload: post
  };
};
