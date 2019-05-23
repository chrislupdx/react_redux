export const ADD_COMMENT = 'Add comment';
export const addComment = (postId, comment) => ({
  type: ADD_COMMENT,
  payload: { postId, comment }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postId, commentId) => ({
  type: DELETE_COMMENT,
  payload: { postId, commentId }
})
;
