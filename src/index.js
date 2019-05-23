import { createStore } from 'redux';
import { ADD_POST, addPost, REMOVE_POST, removePost } from './actions/postActions'; 
import { ADD_COMMENT, addComment } from './actions/commentAction';


const store = createStore(reducer);

store.dispatch(addPost({ title: 'fake post', body: 'all lies' }));
console.log('add post', store.getState());

store.dispatch(removePost({ title: null, body: null }));
console.log('removepost post', store.getState());

store.dispatch(addComment({ comment: 'comment' }));
console.log('added a comment', store.getState());

