import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments, deleteComent }) {
  const commentList = comments.map((comment, i) => {
    <li key={i}>
      <Comment id={i} comment={comment} deleteComment={deleteComent} />
    </li>;
  });

  return (
    <ul>
      {commentList}
    </ul>
  );
}

Comments.PropTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteComent: PropTypes.func.isRequired
};

export default Comments;
