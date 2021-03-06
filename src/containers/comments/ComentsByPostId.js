import { connect } from 'react-redux';
import Comments from '../../components/comments/Comments';
import { deleteComment } from '../../actions/commentAction';
import { getComments } from '../../selectors/commentSelectors';


const mapStateToProps = (state, { postId }) => ({
  comments: getComments(state, postId)
});

const mapDispatchToProps = (dispatch, { postId }) => ({
  deleteComment(commentId) {
    dispatch(deleteComment(postId, commentId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
