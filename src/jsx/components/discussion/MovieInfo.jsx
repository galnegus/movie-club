import React, {Component} from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, pathToJS, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';

export default class MovieInfo extends Component {
  // the datestring is formatted like YYYY-MM-DD and we only want YYYY.
  datestring2year(datestring) {
    return datestring.slice(0, 4);
  }

  render() {
    const { poster_path, credits, genres, release_date, runtime, title, overview } = this.props.api_data;
    const { cast, crew } = credits;

    const posterSrc = "http://image.tmdb.org/t/p/w92" + poster_path;

    let directors=[], stars=[], genresList=[];
    if (crew) {
      directors = crew.filter( d => d.job === "Director").map( d => d.name + ", ");
      directors[directors.length-1] =  directors[directors.length-1].slice(0, -2);
    }
    if (cast && cast[0]) stars.push(cast[0].name);
    if (cast && cast[1]) {
      stars.push(", ");
      stars.push(cast[1].name); 
    }
    if (cast && cast[2]) {
      stars.push(", ");
      stars.push(cast[2].name); 
    }
    if (genres) {
      genresList = genres.map( g => g.name + ", ");
      genresList[genresList.length-1] =  genresList[genresList.length-1].slice(0, -2);
    }

    return (
      <div className='movie-info'>
        <div className='movie-info__poster-container'>
          <img className='movie-info__poster' src={posterSrc} />
        </div>
        <div className='movie-info__content'>
          <h3>{title} <small className='color-grey'>({this.datestring2year(release_date)})</small></h3>
          <p><small><span className='color-grey'>{runtime} minutes</span> | <span className='color-grey'>{genresList}</span></small></p>
          <p><small><strong>Director(s):</strong> {directors}</small></p>
          {stars.length > 0 ? (<p><small><strong>Stars:</strong> {stars}</small></p>) : ''}
          <p>{overview}</p>
        </div>
      </div>
    );
  }
}
