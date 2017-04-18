import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';
import moment from 'moment';
import {WatchedRow} from './watched-row.jsx';

class Watched extends Component{
  render(){
    const { movies } = this.props;
    let rows = [];
    let sortedMovies;
    const current_year_week = moment().format('YYYY-ww'); // YYYY = 1970 1971 ... 2029 2030, ww = 01 02 ... 52 53
    if(isLoaded(movies)){
        sortedMovies = Object.keys(movies)
          .map(key => movies[key])
          .sort((a, b) => {
            if (a.year_week < b.year_week) return 1;
            if (a.year_week > b.year_week) return -1;
            return 0;
          })
          .filter(movie => movie.year_week < current_year_week)
          .slice(0, 5);
        Object.keys(sortedMovies).map( key => {
           rows.push(<WatchedRow {...sortedMovies[key].api_data} 
                                  key={sortedMovies[key].api_data.id}  
                                  year_week={sortedMovies[key].year_week} />)
        });
    }

    return(
      <div className='sidebar-menu'>
        <div className='sidebar-menu__heading'>5 last movies</div>
        <ul className='sidebar-menu__list'>
            {rows}
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