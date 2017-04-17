import React, {Component} from 'react';
import moment from 'moment';

export default class Comment extends Component {

  // make those newlines visible
  // readmore: https://medium.com/@kevinsimper/react-newline-to-break-nl2br-a1c240ba746
  nl2br(str) {
    return str.split(/\r\n|\r|\n/).map((currentValue, index) => {
      return <span key={index}>{currentValue}<br /></span>
    });
  }

  render() {
    return (
      <div className='comment'>
        <strong className='comment__author'>{this.props.commentData.author}</strong>
        <span className='comment__date'>{moment(this.props.commentData.date).calendar()}</span>
        <p className='comment__text'>{this.nl2br(this.props.commentData.text)}</p>
      </div>
    );
  }
}
