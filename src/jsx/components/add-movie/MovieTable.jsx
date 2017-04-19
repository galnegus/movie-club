import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MovieRow from './MovieRow.jsx';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';

class MovieTable extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { movies, searchResults, yearWeek } = this.props;

    let addedMovieIds = [];
    if (isLoaded(movies))
      addedMovieIds = Object.keys(movies).map(key => movies[key].api_data.id);

    let rows;
    if (searchResults) {
      if (searchResults.length === 0) {
        rows = 'No movie was found'
      } else { 
        rows = searchResults.map(movie => {
          const alreadyAdded = addedMovieIds.indexOf(movie.id) !== -1;
          return <MovieRow {...movie} key={movie.id} alreadyAdded={alreadyAdded} yearWeek={yearWeek} />;
        });
      }
    }

  	return (
  	  <ul className='add-movie-results'>
        {rows}
  	  </ul>
  	);
  }
}

const wrappedMovieTable = firebaseConnect([
  '/movies'
])(MovieTable);

export default connect(({ firebase }) => ({
  movies: dataToJS(firebase, 'movies'),
}))(wrappedMovieTable);
