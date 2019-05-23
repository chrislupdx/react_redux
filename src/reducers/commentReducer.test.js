import { addComment, deleteComment } from '../actions/commentAction';
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

});
