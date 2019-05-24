import { connect } from 'react-redux';
import { createComment  } from '../../actions/commentAction';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(createComment(props.postId, comment));
  }
})
;

export default connect(
  null,
  mapDispatchToProps
);
