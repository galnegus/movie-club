import React, {Component} from 'react';
import Comment from './comment.jsx';
import { connect } from 'react-redux';
// import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';
// import { isLoadingComments } from '../../actions';

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.callStoreCommentsDiv = this.callStoreCommentsDiv.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (isLoaded(nextProps.comments))
  //     nextProps.dispatchIsLoadingComments(false);
  // }

  // NOTE: If this is called inline (using fat arrow) there will be an infinite loop because react is stupid when it comes to refs.
  callStoreCommentsDiv(commentsDiv) {
    this.props.storeCommentsDiv(commentsDiv);
  }

  render() {
    // const { comments } = this.props;

    // //console.log('something changed');
    // //console.dir(comments);

    // let commentList;
    // if(!isLoaded(comments)){
    //   commentList = (<div>Loading</div>);
    // } else if(isEmpty(comments)){
    //   commentList = (<div>There are no comments. Be the first one to add a comment!</div>);
    // } else {
    //   commentList = Object.keys(comments)
    //     .map(key => comments[key])
    //     .sort((a, b) => {
    //       if (a.date < b.date) return -1;
    //       if (a.date > b.date) return 1;
    //       return 0;
    //     })
    //     .filter(comment => comment.movieid === this.props.movieID)
    //     .map(comment => (<Comment commentData={comment} key={comment.date} />));
    // }
    // console.log("commentList = ", commentList.length)
    return (
      <div className='comments' ref={this.callStoreCommentsDiv}>
        {this.props.commentList}
      </div>
     );
   }
 }

// const wrappedComments =  firebaseConnect([
//   '/comments#orderByValue'
// ])(Comments)

// export default connect(
//   ({ firebase }) => ({
//     comments: dataToJS(firebase, 'comments'),
//   }), dispatch => ({
//     dispatchIsLoadingComments: (value) => dispatch(isLoadingComments(value))
//   })
// )(wrappedComments);