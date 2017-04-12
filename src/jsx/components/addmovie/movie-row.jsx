import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { firebaseConnect, dataToJS } from 'react-redux-firebase'
import { connect } from 'react-redux';
import axios from 'axios';

class MovieRow extends Component {
  constructor(props) {
    super(props);

    this.addToFirebase = this.addToFirebase.bind(this);
    this.findNextYearWeek = this.findNextYearWeek.bind(this);
  }

  // the datestring is formatted like YYYY-MM-DD and we only want YYYY.
  datestring2year(datestring) {
    return datestring.slice(0, 4);
  }

  // checkIfMovieExists(movieID){
  //   const { movies } = this.props;
  //   return Object.keys(movies).map( key => movies[key]).some(movie => movie.api_data.id == movieID);
  // }

  findNextYearWeek() {
    const { movies } = this.props;
    // console.log("movies = ", movies)
    // Object.keys(movies).map( key => (console.log("w = ", movies[key].year_week)))
    const year_week = Object.keys(movies).map( key => movies[key].year_week);
    // console.log("year_week = ", year_week)
    const max = year_week.sort()[year_week.length-1];
    let next;
    // console.log("max = ", max)
    // console.log("week = ", parseInt(max.substring(5)))
    // console.log("year = ", parseInt(max.substring(0,4)))
    if(parseInt(max.substring(5)) < 52){
      next = max.substring(0,4) + "-"+ (parseInt(max.substring(5))+1).toString();
      // console.log("next = ", next)
    } else if(parseInt(max.substring(5)) == 52){
      next = (parseInt(max.substring(0,4))+1).toString() + "-01";
      // console.log("next = ", next)
    }
    return next;
  }

  // WIP
  addToFirebase(e) {
    e.preventDefault();
    // assume that the week will be stored in firebase a string, make it sortable in string format!
    // const current_year_week = moment().format('YYYY-ww'); // YYYY = 1970 1971 ... 2029 2030, ww = 01 02 ... 52 53
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/' + this.props.id,
      params:{
        api_key: 'a4eb585b085da1972100342a6d21c935',
        append_to_response: 'credits'
      }
    }).then(response => {
      const { api_data } = response;
      const nextYearWeek = this.findNextYearWeek();
      // console.log("nextYearWeek = ", nextYearWeek)      
      const movieObj = {year_week: nextYearWeek, api_data: response.data}; //, year: current_year, week: current_week};
      this.props.firebase.push('/movies', movieObj);
    });
  }


  render() {
    // see https://developers.themoviedb.org/3/search/search-movies (response schema.results) to see what props are available
    const src = "http://image.tmdb.org/t/p/w92" + this.props.poster_path;
    let addButton;
    if (this.props.addedMoviesID.indexOf(this.props.id) > -1){
      addButton = <p><span className='typcn typcn-tick' /></p>
    } else {
      addButton = <a href='#' className='add-movie-results__button' onClick={this.addToFirebase}><span className='typcn typcn-plus' /></a>
    }
    return(
      <li className='add-movie-results__item'>
        {!this.props.poster_path ? '' : (<img className='add-movie-results__image' src={src}></img>)}
        <div className='add-movie-results__block'>
          <div className='add-movie-results__info'>
            <strong className='add-movie-results__title'>{this.props.title + ' (' + this.datestring2year(this.props.release_date) + ')'}</strong>
            <p className='add-movie-results__text'>{this.props.overview}</p>
          </div>
          {addButton}
        </div>
      </li>
    );
  }
}

const wrappedMovieRow = firebaseConnect([
  { path: '/movies', queryParams: [ 'orderByChild=year_week' ] }
])(MovieRow);
export default connect(({ firebase }) => ({
  movies: dataToJS(firebase, 'movies'),
}))(wrappedMovieRow);
