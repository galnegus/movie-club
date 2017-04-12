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
    const current_year_week = moment().format('YYYY-ww'); // YYYY = 1970 1971 ... 2029 2030, ww = 01 02 ... 52 53
    if(isLoaded(movies)){
        Object.keys(movies).map( key => {
            if(movies[key].year_week < current_year_week){
               rows.push(<WatchedRow {...movies[key].api_data} key={movies[key].api_data.id}  year_week={movies[key].year_week} />)
            }
        });
    }
    return(
      <div className='sidebar-menu'>
        <div className='sidebar-menu__heading'>Watched movies</div>
        <ul className='sidebar-menu__list'>
            {rows}
        </ul>
      </div>
    );
  }
}

const wrappedWatched = firebaseConnect([
  { path: '/movies', queryParams: [ 'orderByChild=year_week' ] }
])(Watched);
export default connect(({ firebase }) => ({
  movies: dataToJS(firebase, 'movies'),
}))(wrappedWatched);