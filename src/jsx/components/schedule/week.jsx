import React, {Component} from 'react';
import moment from 'moment';

export class Week extends Component{
	render(){
		let classModifier = '';
		let isCurrentWeek = false;
		const current_year_week = moment().format('YYYY-ww'); // YYYY = 1970 1971 ... 2029 2030, ww = 01 02 ... 52 53
		const img_src = "http://image.tmdb.org/t/p/w92" + this.props.poster_path;
		
		if (this.props.year_week === current_year_week) {
			classModifier = 'schedule-list__item--current-week';
			isCurrentWeek = true;
		} else if (this.props.year_week > current_year_week) {
			classModifier = 'schedule-list__item--faded';
		}

		return(
			<li className={'schedule-list__item ' + classModifier}>
				<div className='schedule-list__bumps'><span className='typcn typcn-th-small' /></div>
				<img className='schedule-list__image' src={img_src} />
				<div className='schedule-list__info'>
					<h3>{'Week ' + parseInt(this.props.year_week.substring(5)) + ', ' + parseInt(this.props.year_week.substring(0,4)) } {isCurrentWeek ? <small>current week</small> : ''} </h3>
					<strong>{this.props.title} ({this.props.release_date.substring(0,4)})</strong>
				</div>
			</li>
		);
	}
}
