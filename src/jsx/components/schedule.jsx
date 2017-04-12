import React, {Component} from 'react';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { Week } from './schedule/week.jsx';

class Schedule extends Component{
	render(){
	    const { movies } = this.props;
	    let movies_array = [];
	    var rows = [];
	    if(isLoaded(movies)){
	        rows = Object.keys(movies)
	        			 .map( key => movies[key])
	        			 .sort((b,a) => {
	        			 	if(a.year_week > b.year_week) return 1;
	        			 	if(a.year_week < b.year_week) return -1;
	        			 	return 0;
	        			 })
	        			 .map( movie => (<Week {...movie.api_data} key={movie.api_data.id} year_week={movie.year_week} />))
	        
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