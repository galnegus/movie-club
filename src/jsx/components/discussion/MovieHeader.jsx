import React, {Component} from 'react';

export default class MovieHeader extends Component {
  render() {
    return (
      <div className='movie-header'>
        <span className='movie-header__week'><strong>Week:</strong> 16 <span className='color-grey'>(current week)</span></span>
        <span className='movie-header__title'><strong>Movie:</strong> Ginger Snaps <span className='color-grey'>(2000)</span></span>
        <span className='movie-header__comment-counter'>There are <strong>3 comments</strong></span>
      </div>
    );
  }
}
