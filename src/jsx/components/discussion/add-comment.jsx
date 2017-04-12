import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, pathToJS, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';
import { doneLoadingAddComment } from '../../actions';

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.setTextareaRef = this.setTextareaRef.bind(this);
    this.setFormRef = this.setFormRef.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (isLoaded(nextProps.auth)) {
      nextProps.dispatchDoneLoadingAddComment();
      if (this.textarea)
        this.textarea.focus();
    }
  }

  setFormRef(form) {
    this.form = form;
  }

  setTextareaRef(textarea) {
    this.textarea = textarea;
  }

  // WIP, adding spinner to button
  onSubmit(e) {
    if (e) e.preventDefault();
    const { profile } = this.props;
    setTimeout(() => {
      console.log('IT IS DONE');
    }, 1000);
    //this.props.firebase.push('/comments', { author: profile.username, text: this.textarea.value, date: moment().format('MMMM Do YYYY, h:mm:ss a') })
    this.textarea.value = '';
    this.props.resizeTextarea(this.textarea);
  }

  handleEnterKey(e) {
    if (e.key !== 'Enter') return;
    if (e.ctrlKey || e.shiftKey) return;
    this.onSubmit();
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    const { auth } = this.props;

    let contents;
    if (!isLoaded(auth) || isEmpty(auth)) {
      contents = (
        <p className='add-comment-denial'>Log in to participate in the discussion.</p>
      );
    } else {
      contents = (
        <form className='add-comment' onSubmit={this.onSubmit} ref={this.setFormRef}>
          <textarea className='add-comment__input' ref={this.setTextareaRef} placeholder='Leave a comment' rows='1' onKeyDown={this.handleEnterKey} onInput={() => this.props.resizeTextarea(this.textarea)} />
          <button className='add-comment__submit' type='submit'>Submit</button>
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
  }), dispatch => ({
    dispatchDoneLoadingAddComment: () => dispatch(doneLoadingAddComment())
  })
)(wrappedAddComment);