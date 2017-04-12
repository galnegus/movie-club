import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, pathToJS, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.setTextareaRef = this.setTextareaRef.bind(this);
    this.setFormRef = this.setFormRef.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);
  }

  setFormRef(form) {
    this.form = form;
  }

  setTextareaRef(textarea) {
    this.textarea = textarea;
  }

  onSubmit(e) {
    if (e) e.preventDefault();
    const { profile } = this.props;
    this.props.firebase.push('/comments', { author: profile.username, text: this.textarea.value, date: moment().format('MMMM Do YYYY, h:mm:ss a') })
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
    return (
      <div className='add-comment-container'>
        <form className='add-comment' onSubmit={this.onSubmit} ref={this.setFormRef}>
          <textarea className='add-comment__input' ref={this.setTextareaRef} placeholder='Leave a comment' rows='1' onKeyDown={this.handleEnterKey} onInput={() => this.props.resizeTextarea(this.textarea)} />
          <button className='add-comment__submit' type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const wrappedAddComment = firebaseConnect()(AddComment);
export default connect(({ firebase }) => ({
  profile: pathToJS(firebase, 'profile')
}))(wrappedAddComment);