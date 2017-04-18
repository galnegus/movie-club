import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, pathToJS, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';

export default class MovieInfo extends Component {
  // the datestring is formatted like YYYY-MM-DD and we only want YYYY.
  datestring2year(datestring) {
    return datestring.slice(0, 4);
  }

  render() {
    const img_src = "http://image.tmdb.org/t/p/w92" + this.props.api_data.poster_path;
    console.dir(this.props);

    return (
      <div className='movie-info'>
        <img className='movie-info__poster' src={img_src} />
        <div className='movie-info__content'>
          <h3>{this.props.api_data.title} <small className='color-grey'>({this.datestring2year(this.props.api_data.release_date)})</small></h3>
          <p className='color-grey'>1h 48m | Horror, Comedy, Drama</p>
          <p><strong>Director:</strong> John Fawcett</p>
          <p><strong>Stars:</strong> Katharine Isabelle, Emily Perkins</p>
          <p>{this.props.api_data.overview}</p>
        </div>
      </div>
    );
  }
}