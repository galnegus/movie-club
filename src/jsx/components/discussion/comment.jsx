import React, {Component} from 'react';

export default class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <strong className='comment__author'>{this.props.commentData.author}</strong>
        <span className='comment__date'>{this.props.commentData.date}</span>
        <p className='comment__text'>{this.props.commentData.text}</p>
        <hr />
      </div>
    );
  }
}
