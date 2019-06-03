import { connect } from 'react-redux';
import { addComment  } from '../../actions/commentAction';
import CommentForm from '../../components/comments/CommentForm';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(addComment(props.postId, comment));
  }
})
;

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
