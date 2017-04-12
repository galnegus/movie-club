import React, {Component} from 'react';
import moment from 'moment';

export default class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <strong className='comment__author'>{this.props.commentData.author}</strong>
        <span className='comment__date'>{moment(this.props.commentData.date).calendar()}</span>
        <p className='comment__text'>{this.props.commentData.text}</p>
      </div>
    );
  }
}
