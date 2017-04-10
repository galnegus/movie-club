import React, {Component} from 'react';

export default class AddComment extends Component {
  render() {
    return (
      <form className='add-comment'>
        <textarea className='add-comment__input' placeholder='Leave a comment' rows='1' onInput={this.props.onInput} />
        <button className='add-comment__submit' type='submit'>Submit</button>
      </form>
    );
  }
}