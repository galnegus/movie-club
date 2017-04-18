import React, {Component} from 'react';
import Comment from './comment.jsx';
import { connect } from 'react-redux';

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.callStoreCommentsDiv = this.callStoreCommentsDiv.bind(this);
  }

  // NOTE: If this is called inline (using fat arrow) there will be an infinite loop because react is stupid when it comes to refs.
  callStoreCommentsDiv(commentsDiv) {
    this.props.storeCommentsDiv(commentsDiv);
  }

  render() {
    return (
      <div className='comments' ref={this.callStoreCommentsDiv}>
        {this.props.commentList}
      </div>
     );
   }
 }
