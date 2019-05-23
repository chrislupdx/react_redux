import { addComment, removeComment } from '../actions/commentAction';
import reducer from './commentReducer';

describe('comment reducer test', () => {

  it('add comment reducer', () => {
    const newState = reducer({}, addComment(1, 'no'));
    expect(newState).toEqual({
      1: ['no']
    });
  });

  it('removescomment reducer', () => {})

});
