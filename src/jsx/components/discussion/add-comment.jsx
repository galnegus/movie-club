import React, {Component} from 'react';
import { firebaseConnect } from 'react-redux-firebase'
import { connect } from 'react-redux';

class AddComment extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.setTextareaRef = this.setTextareaRef.bind(this);
  }

  setTextareaRef(textarea) {
    this.textarea = textarea;
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.firebase.push('/comments', { author: 'cool', text: this.textarea.value })
  }

  render() {
    return (
      <form className='add-comment' onSubmit={this.onSubmit}>
        <textarea className='add-comment__input' ref={this.setTextareaRef} placeholder='Leave a comment' rows='1' onInput={this.props.onInput} />
        <button className='add-comment__submit' type='submit'>Submit</button>
      </form>
    );
  }
}

const wrappedAddComment = firebaseConnect()(AddComment);
export default connect()(wrappedAddComment);