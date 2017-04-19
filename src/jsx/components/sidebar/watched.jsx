import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';
import moment from 'moment';
import WatchedRow from './WatchedRow.jsx';

class Watched extends Component{
  render() {
    const { movies } = this.props;
    const currentYearWeek = moment().format('YYYY-ww'); // YYYY = 1970 1971 ... 2029 2030, ww = 01 02 ... 52 53
    
    let sortedMovies = [];
    if (isLoaded(movies)) {
      sortedMovies = Object.keys(movies) // movies is an object, we want it to be a sorted array
        .map(key => movies[key])
        .sort((a, b) => {
          if (a.year_week < b.year_week) return 1;
          if (a.year_week > b.year_week) return -1;
          return 0;
        })
        .filter(movie => movie.year_week < currentYearWeek)
        .slice(0, 5)
        .map(movie => {
          return <WatchedRow {...movie.api_data} key={movie.api_data.id} yearWeek={movie.year_week} />;
        });
    }

    return(
      <div className='sidebar-menu'>
        <div className='sidebar-menu__heading'>5 last movies</div>
        <ul className='sidebar-menu__list'>
          {sortedMovies}
        </ul>
      </div>
    );
  }
}

const wrappedWatched = firebaseConnect([
  '/movies'
])(Watched);

export default connect(({ firebase }) => ({
  movies: dataToJS(firebase, 'movies'),
}))(wrappedWatched);
