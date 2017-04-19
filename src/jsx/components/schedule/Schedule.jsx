import React, {Component} from 'react';
import { firebaseConnect, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';
import Week from './Week.jsx';
import EmptyWeek from './EmptyWeek.jsx';
import moment from 'moment';

class Schedule extends Component{
	render() {
    const { movies } = this.props;
		const currentYearWeek = moment().format('YYYY-ww')

    const futureYearWeeks = new Set();
    for (let i = 4; i >= 0; i--)
    	futureYearWeeks.add(moment().add(i, 'w').format('YYYY-ww'));

    let movieList = [];
    let res = [];
    if (isLoaded(movies)) {
    	// put movie data from firebase into movieList and sort it after week
    	movieList = Object.keys(movies)
			.map( key => {
        const movie = movies[key];
        movie.firebaseId = key;
        return movie;
      })
			.sort((b,a) => {
			 	if(a.year_week > b.year_week) return 1;
			 	if(a.year_week < b.year_week) return -1;
		 		return 0;
			});

			// add current/future movies/empty weeks to res array
    	for (let yearWeek of futureYearWeeks.values()) {
				const movie = movieList.find(movie => movie.year_week === yearWeek);
				if (movie) {
					res.push((<Week {...movie.api_data} key={movie.year_week} year_week={movie.year_week} firebaseId={movie.firebaseId} />));
				} else {
					res.push((<EmptyWeek key={yearWeek} year_week={yearWeek} />));
				}
			};

			// add past movies to res array
			movieList.forEach(movie => {
				if (movie.year_week < currentYearWeek) {
					res.push((<Week {...movie.api_data} key={movie.year_week} year_week={movie.year_week} firebaseId={movie.firebaseId} />));
				};
			});
    }

		return (
      <div>
        <div className='schedule-header'>
          <div className='schedule-header__content'>
            <h2>Schedule</h2>
            <p>Select movies for up to 4 weeks ahead!</p>
          </div>
        </div>
  			<ul className='schedule-list'>
  				{res}
  			</ul>
      </div>
		);
	}
}

const wrappedSchedule = firebaseConnect([
  '/movies'
])(Schedule);

export default connect(({ firebase }) => ({
  movies: dataToJS(firebase, 'movies'),
}))(wrappedSchedule);
