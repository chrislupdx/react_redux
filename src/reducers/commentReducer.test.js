import { addComment, deleteComment } from '../actions/commentAction';
import { removePost } from '../actions/postActions';
import reducer from './commentReducer';

describe('comment reducer test', () => {

  it('add comment reducer', () => {
    const newState = reducer({}, addComment(1, 'no'));
    expect(newState).toEqual({
      1: ['no']
    });
  });

  it('can comment @ pre-exisiting comments', () => {
    const initialState = {
      1: ['hey']
    };
    const newState = reducer(initialState, addComment(1, 'we all die alone'));

    expect(newState).toEqual({
      1: ['hey', 'we all die alone']
    });
  });

  it('can do delete comment', () => {
    const initialState = {
      1: ['hey', 'comment2'],
    };
    const newState = reducer(initialState, deleteComment(1, 0));

    expect(newState).toEqual({
      1: ['comment2']
    });
  });

  it('works with removePost', () => {
    const initialState = {
      0: ['rudeness'],
      1: ['hey', 'nope'],
      2: ['do not call it optimism']
    };
    const newState = reducer(initialState, removePost(1));

    expect(newState).toEqual({
      0: ['rudeness'],
      2: ['do not call it optimism']
    });
  });

});
