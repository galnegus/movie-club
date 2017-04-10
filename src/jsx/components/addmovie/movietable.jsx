import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class MovieTable extends Component{
  render(){
    var rows = [];
    if(this.props.movies){
      this.props.movies.forEach( movie => {
        //console.log("movie = ", movie.poster_path)
        rows.push( <MovieRow id={movie.id} 
                              key={movie.id}
                              title={movie.title}
                              overview={movie.overview}
                              poster_path={movie.poster_path}
                              release_date={movie.release_date} />)
      });
    }

  	return(
  	  <ul className='add-movie-results'>
        {rows}
  	  </ul>
  	);
  }
}

class MovieRow extends Component{
  // the datestring is formatted like YYYY-MM-DD and we only want YYYY.
  datestring2year(datestring) {
    return datestring.slice(0, 4);
  }

  render(){
    const src = "http://image.tmdb.org/t/p/w92" + this.props.poster_path;
  	return(
  	  <li className='add-movie-results__item'>
        <img className='add-movie-results__image' src={src}></img>
        <div className='add-movie-results__block'>
          <div className='add-movie-results__info'>
            <strong className='add-movie-results__title'>{this.props.title + ' (' + this.datestring2year(this.props.release_date) + ')'}</strong>
            <p className='add-movie-results__text'>{this.props.overview}</p>
          </div>
          <a href='#' className='add-movie-results__button' type="submit"><span className='typcn typcn-plus'></span></a>
        </div>
  	  </li>
  	);
  }
}
