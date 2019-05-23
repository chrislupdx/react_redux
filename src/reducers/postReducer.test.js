import { addPost, removePost } from '../actions/postActions';
import reducer from './postReducer';

describe('reducer test', () => {
  const initialState = {
    post: {
      title: null,
      body: null,
    },
  };

  it('Add reducer', () => {
    expect(reducer(initialState, addPost({ title: 'no', body: 'nothing' }))).toEqual(
      {
        'post': {
          title: 'no',
          body: 'nothing'
        }
      }
    );
  });
  it('delete', () => {
    const initialState2 = {
      post: {
        title: 'pigs',
        body: 'fly',
      },
    };

    expect(reducer(initialState2, removePost({ title:null, body:null }))).toEqual(
      {
        'post':{
          title: null,
          body: null
        }
      }
    );
  });

    
});
