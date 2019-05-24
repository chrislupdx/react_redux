import { connect } from 'react-redux';

const mapDispatchtoProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(createComment(props.postId, comment));
  }
});

export default connect(
  null,
  mapDispatchtoProps
)(CommentForm);
