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
  it('deletes', () => {
    const initialState2 = [
      { title: 'p1', body: 'body1' },
      { title: 'p2', body: 'body2' },
      { title: 'p3', body: 'body3' }
    ];

    const newState = reducer(initialState2, removePost(0));
    expect(newState).toEqual([
      { 'title': 'p2', 'body': 'body2' },
      { 'title': 'p3', 'body': 'body3' }
    ]);
  });

    
});
