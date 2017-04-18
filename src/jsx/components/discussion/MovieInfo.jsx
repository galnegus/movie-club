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
    let directors=[], stars=[], genres=[];
    const casts = this.props.api_data.credits.cast;
    const crew = this.props.api_data.credits.crew;
    const genre_list = this.props.api_data.genres;
    if(crew) {
      directors = crew.filter( d => d.job === "Director").map( d => d.name + ", ");
      directors[directors.length-1] =  directors[directors.length-1].slice(0, -2);
    }
    if(casts && casts[0]) { stars.push(casts[0].name) };
    if(casts && casts[1]) { stars.push(", "); stars.push(casts[1].name); }
    if(genre_list) {
      genres = genre_list.map( g => g.name + ", ");
      genres[genres.length-1] =  genres[genres.length-1].slice(0, -2);
    }

    // console.log("genres = ", genres)
    return (
      <div className='movie-info'>
        <div className='movie-info__poster-container'>
          <img className='movie-info__poster' src={img_src} />
        </div>
        <div className='movie-info__content'>
          <h3>{this.props.api_data.title} <small className='color-grey'>({this.datestring2year(this.props.api_data.release_date)})</small></h3>
          <p><span className='color-grey'>{this.props.api_data.runtime} minutes</span> | <span className='color-grey'>{genres}</span></p>
          <p><strong>Director(s):</strong> {directors} </p>
          {stars.length>0 ? (<p><strong>Stars:</strong> {stars}</p>) : ""}
          <p>{this.props.api_data.overview}</p>
        </div>
      </div>
    );
  }
}