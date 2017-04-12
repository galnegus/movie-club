import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MovieRow from './movie-row.jsx';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';

class MovieTable extends Component{
  constructor(props) {
    super(props);
    this.getAddedMoviesID = this.getAddedMoviesID.bind(this);
  }

  getAddedMoviesID(){
    const { movies } = this.props;
    if(isLoaded(movies)){
      return Object.keys(movies).map( key => movies[key].api_data.id);
    }
  }

  render(){
    const addedMoviesID = this.getAddedMoviesID();
    var rows = [];
    if(this.props.searchResults){
      if(this.props.searchResults.length == 0){
        rows = 'No movie was found'
      } else {      
        this.props.searchResults.forEach( movie => {
          rows.push( <MovieRow {...movie} key={movie.id} addedMoviesID={addedMoviesID} />)
        });
      }
    }

  	return(
  	  <ul className='add-movie-results'>
        {rows}
  	  </ul>
  	);
  }
}

const wrappedMovieTable = firebaseConnect([
  { path: '/movies', queryParams: [ 'orderByChild=year_week' ] }
])(MovieTable);
export default connect(({ firebase }) => ({
  movies: dataToJS(firebase, 'movies'),
}))(wrappedMovieTable);