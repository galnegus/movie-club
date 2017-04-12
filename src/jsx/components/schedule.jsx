import React, {Component} from 'react';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { Week } from './schedule/week.jsx';

class Schedule extends Component{
	render(){
	    const { movies } = this.props;
	    console.log("movies = ", movies)
	    var rows = [];
	    if(isLoaded(movies)){
	        Object.keys(movies).map( key => {
               rows.push(<Week {...movies[key].api_data} key={movies[key].api_data.id} year_week={movies[key].year_week}  />)
	        });
	    }
		return(
			<ul className='schedule-list'>
				{rows}
			</ul>
		);
	}
}


const wrappedSchedule = firebaseConnect([
  { path: '/movies', queryParams: [ 'orderByChild=year_week' ] }
])(Schedule);
export default connect(({ firebase }) => ({
  movies: dataToJS(firebase, 'movies'),
}))(wrappedSchedule);