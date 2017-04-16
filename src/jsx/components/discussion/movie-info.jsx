import React, {Component} from 'react';

export default class MovieInfo extends Component {
  // the datestring is formatted like YYYY-MM-DD and we only want YYYY.
  datestring2year(datestring) {
    return datestring.slice(0, 4);
  }

  render() {
    return (
      <div className='movie-info'>
        <img className='movie-info__poster' src={this.props.info.poster_path} />
        <div className='movie-info__content'>
          <h3>{this.props.info.title} <small className='color-grey'>({this.datestring2year(this.props.info.release_date)})</small></h3>
          <p>{this.props.info.overview}</p>
        </div>
      </div>
    );
  }
}
