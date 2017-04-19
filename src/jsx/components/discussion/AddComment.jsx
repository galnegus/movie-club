import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, pathToJS, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonValue: (<span className='typcn typcn-arrow-forward-outline' />)
    };

    this.postComment = this.postComment.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);
  }

  componentDidMount() {
    if (this.textarea)
      this.textarea.focus();
  }

  postComment(e) {
    if (e) e.preventDefault();

    const { profile, firebase, movieId, resizeTextarea } = this.props;

    const oldButtonValue = this.state.buttonValue;
    this.setState({ buttonValue: (<span className='loader loader--small' />) });

    firebase.push('/comments', { 
      author: profile.username,
      text: this.textarea.value,
      date: moment().format(),
      movieid: movieId
    }).then(() => {
      this.setState({ buttonValue: oldButtonValue });
    });

    this.textarea.value = '';
    resizeTextarea(this.textarea);
  }

  handleEnterKey(e) {
    if (e.key !== 'Enter') return;
    if (e.ctrlKey || e.shiftKey) return;
    this.postComment();
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    const { auth, yearWeek, resizeTextarea } = this.props;

    let contents;
    if (!isLoaded(auth)) {
      contents = (
        <div className='add-comment-denial'>
          <div className='loader loader--small' />
        </div>
      );
    } else if (isEmpty(auth)) {
      contents = (<p className='add-comment-denial'>Log in to participate in the discussion.</p>);
    } else if (yearWeek !== moment().format('YYYY-ww')) {
      contents = (<p className='add-comment-denial'>This discussion has been archived.</p>);      
    } else {
      contents = (
        <form className='add-comment' onSubmit={this.postComment} ref={form => this.form = form}>
          <textarea className='add-comment__input' ref={textarea => this.textarea = textarea} placeholder='Leave a comment' rows='2' onKeyDown={this.handleEnterKey} onInput={() => resizeTextarea(this.textarea)} />
          <button className='add-comment__submit' type='submit'>{this.state.buttonValue}</button>
        </form>
      );
    }

    return (
      <div className='add-comment-container'>
        {contents}
      </div>
    );
  }
}

const wrappedAddComment = firebaseConnect()(AddComment);

export default connect(
  ({ firebase }) => ({
    auth: pathToJS(firebase, 'auth'),
    profile: pathToJS(firebase, 'profile')
  })
)(wrappedAddComment);
