import React from 'react';
import PropTypes from 'prop-types';
import CommentByPostId from '../../containers/comments/ComentsByPostId';
import CreateComment from '../../containers/comments/CreateComment.js';

function PostDetail({ post }) {
  const paras = post.body.split('/n').map((p, i) => (
    <p key={i}>{p}</p>
  ));
  return (
    <section>
      <h1>{post.title}</h1>
      {paras}
      <CommentByPostId postId={post.id} />
      <CreateComment postId={post.id} />
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
}
;

export default PostDetail;
