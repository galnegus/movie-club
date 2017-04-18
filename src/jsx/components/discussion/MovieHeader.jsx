import React, {Component} from 'react';
import moment from 'moment';
// import { connect } from 'react-redux';
// import { firebaseConnect, pathToJS, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';

export default class MovieHeader extends Component {
  // the datestring is formatted like YYYY-MM-DD and we only want YYYY.
  datestring2year(datestring) {
    return datestring.slice(0, 4);
  }

  render() {
    // const { comments } = this.props;
  	// console.log("this.props.info = ", this.props.info)
  	// console.log("comments = ", comments)
   //  if(isLoaded(comments)){
   //  	comments.
   //  }
  	const current_year_week = moment().format('YYYY-ww');
  	const current_week = (current_year_week === this.props.info.year_week) ? "(current week)" : null;
    return (
      <div className='movie-header'>
        <span className='movie-header__week'><strong>Week:</strong> {this.props.info.year_week.substring(5)} <span className='color-grey'>{current_week}</span></span>
        <span className='movie-header__title'><strong>Movie:</strong> {this.props.info.api_data.title} <span className='color-grey'>({this.datestring2year(this.props.info.api_data.release_date)})</span></span>
        <span className='movie-header__comment-counter'>There are <strong>{this.props.numberOfComments} comments</strong></span>
      </div>
    );
  }
}

// const wrappedmovieheader = firebaseConnect([
//   { path: '/comments' } 
// ])(MovieHeader);
// export default connect(({ firebase }) => ({
//   comments: dataToJS(firebase, 'comments'),
// }))(wrappedmovieheader);