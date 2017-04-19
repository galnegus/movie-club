import React, {Component} from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import moment from 'moment';
import Notifications from 'react-notification-system-redux';

class Week extends Component{
	constructor(props) {
		super(props);

		this.deleteMovie = this.deleteMovie.bind(this);
	}

	deleteMovie(e) {
		e.preventDefault();
		const { firebase, firebaseId, notify, title } = this.props;

		firebase.remove('/movies/' + firebaseId).then(() => {
			notify({
        title: 'Removed',
        message: title + ' has been removed from the schedule',
        position: 'bc',
        dismissible: false,
        autoDismiss: 3
      });
		}).catch(() => {
			notifyError({
				title: 'Error',
        message: title + ' could not be added because of a network error.',
        position: 'bc',
        dismissible: false,
        autoDismiss: 3
			});
		});
	}

	render(){
		const { poster_path, year_week, title, release_date } = this.props;

		let classModifier = '';
		let isCurrentWeek = false;
		const currentYearWeek = moment().format('YYYY-ww'); // YYYY = 1970 1971 ... 2029 2030, ww = 01 02 ... 52 53
		const posterSrc = "http://image.tmdb.org/t/p/w92" + poster_path;
		
		if (year_week === currentYearWeek) {
			classModifier = 'schedule-list__item--current-week';
			isCurrentWeek = true;
		} else if (year_week < currentYearWeek) {
			classModifier = 'schedule-list__item--faded';
		}

		return(
			<li className={'schedule-list__item ' + classModifier}>
				<div className='schedule-list__year-week'>
					<div>
						<span className='schedule-list__week'>{'Week ' + parseInt(year_week.substring(5))}</span>
						<br />
						<span className='schedule-list__year'>{parseInt(year_week.substring(0,4)) }</span>
					</div>
				</div>
				<div className='schedule-list__content'>
					<img className='schedule-list__image' src={posterSrc} />
					<div className='schedule-list__info'>
						<strong>{title} ({release_date.substring(0,4)})</strong>
					</div>
					{year_week > currentYearWeek ? (
						<a href='#' type='button' onClick={this.deleteMovie} className='schedule-list__delete-button'>
							<span className='typcn typcn-delete' />
						</a>
					) : ''}
				</div>
			</li>
		);
	}
}

const wrappedWeek = firebaseConnect()(Week);

export default connect(null, dispatch => ({
	notify: options => dispatch(Notifications.info(options)),
	notifyError: options => dispatch(Notifications.error(options))
}))(wrappedWeek);
