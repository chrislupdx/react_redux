import { ADD_COMMENT, addComment, DELETE_COMMENT, deleteComment } from './commentAction';

describe('post comments', () => {

  it('can add a comment', () => {
    expect(addComment(0, 'My Comment')).toEqual({
      type: ADD_COMMENT,
      payload: { postId: 0, comment: 'My Comment' }
    });
  });

  it('can delete a comment', () => {
    expect(deleteComment(0, 1)).toEqual({
      type: DELETE_COMMENT,
      payload: { postId: 0, commentId: 1 }
    });
  });
 

});
