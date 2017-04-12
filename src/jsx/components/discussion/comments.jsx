import React, {Component} from 'react';
import Comment from './comment.jsx';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';
import { doneLoadingComments } from '../../actions';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.callStoreCommentsDiv = this.callStoreCommentsDiv.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (isLoaded(nextProps.comments))
      nextProps.dispatchDoneLoadingComments();
  }

  // NOTE: If this is called inline (using fat arrow) there will be an infinite loop because react is stupid when it comes to refs.
  callStoreCommentsDiv(commentsDiv) {
    this.props.storeCommentsDiv(commentsDiv);
  }

  render() {
    const { comments } = this.props;

    //console.log('something changed');
    //console.dir(comments);

    let commentList;
    if(!isLoaded(comments)){
      commentList = (<div>Loading</div>);
    } else if(isEmpty(comments)){
      commentList = (<div>There are no comments. Be the first one to add a comment!</div>);
    } else {
      commentList = Object.keys(comments).map(key => (<Comment commentData={comments[key]} key={key} />));
    }

    return (
      <div className='comments' ref={this.callStoreCommentsDiv}>
        {commentList}
      </div>
     );
   }
 }

const wrappedComments =  firebaseConnect([
  '/comments'
])(Comments)

export default connect(
  ({ firebase }) => ({
    comments: dataToJS(firebase, 'comments'),
  }), dispatch => ({
    dispatchDoneLoadingComments: () => dispatch(doneLoadingComments())
  })
)(wrappedComments);