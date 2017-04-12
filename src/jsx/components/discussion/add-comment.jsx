import React, {Component} from 'react';
import { firebaseConnect } from 'react-redux-firebase'
import { connect } from 'react-redux';

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

    console.log(this.textarea.value);

    this.textarea.value = '';
    this.props.resizeTextarea(this.textarea);
    //this.props.firebase.push('/comments', { author: 'cool', text: this.textarea.value })
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
export default connect()(wrappedAddComment);