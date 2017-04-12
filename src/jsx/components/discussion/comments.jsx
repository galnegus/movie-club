import React, {Component} from 'react';
import Comment from './comment.jsx';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.callStoreCommentsDiv = this.callStoreCommentsDiv.bind(this);
  }

  // NOTE: If this is called inline (using fat arrow) there will be an infinite loop because react is stupid when it comes to refs.
  callStoreCommentsDiv(commentsDiv) {
    this.props.storeCommentsDiv(commentsDiv);
  }

  render() {
    const { comments } = this.props;
    if(!isLoaded(comments)){
        return(<div>Loading</div>);
    }
    else if(isEmpty(comments)){
        return(<div>There is no comment. Be the first one to add a comment!</div>);
    }

    return (
        <div className='comments' ref={this.callStoreCommentsDiv}>
            {Object.keys(comments).map( key => (<Comment commentData={comments[key]} key={key} />) )}
        </div>
     );
   }
 }

const wrappedComments =  firebaseConnect([
  '/comments'
])(Comments)

export default connect(
  ({firebase}) => ({
    comments: dataToJS(firebase, 'comments'),
  })
)(wrappedComments);