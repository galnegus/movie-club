import React, {Component} from 'react';

export class Schedule extends Component{
	constructor() {
		super();
		const weeksData = [
			{51:{"title":"Star Wars", "year":"1990", "poster":"http://image.tmdb.org/t/p/w92/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg"}},
			{50:{"title":"Star Wars2", "year":"1992", "poster":"http://image.tmdb.org/t/p/w92/4UrrUoVQ1Ft6g6uI4FQN6JrJwSQ.jpg"}},
			{49:{"title":"Star Wars4", "year":"1994", "poster":"http://image.tmdb.org/t/p/w92/6u1fYtxG5eqjhtCPDx04pJphQRW.jpg"}},
		];
		this.state = {
			currentWeek: 50,
			weekList: weeksData,
		};
	}

	render(){
		var rows = [];
		if(this.state.weekList){
			this.state.weekList.forEach( week => {
				var id = Object.keys(week)[0];
				rows.push( <Week weekNumber={parseInt(id)}
								key={Object.keys(week)[0]}
								title={week[id].title}
								year={week[id].year}
								poster={week[id].poster}
								currentWeek={this.state.currentWeek} /> )
			});
		}

		return(
				<ul className='schedule-list'>
					{rows}
				</ul>
			);
		}
	}

class Week extends Component{
	render(){
		let classModifier = '';
		let isCurrentWeek = false;
		if (this.props.currentWeek === this.props.weekNumber) {
			classModifier = 'schedule-list__item--current-week';
			isCurrentWeek = true;
		} else if (this.props.currentWeek > this.props.weekNumber) {
			classModifier = 'schedule-list__item--faded';
		}

		return(
			<li className={'schedule-list__item ' + classModifier}>
				<div className='schedule-list__bumps'><span className='typcn typcn-th-small'></span></div>
				<img className='schedule-list__image' src={this.props.poster} />
				<div className='schedule-list__info'>
					<h3>{'Week ' + this.props.weekNumber} {isCurrentWeek ? <small>current week</small> : ''} </h3>
					<strong>{this.props.title} ({this.props.year})</strong>
				</div>
			</li>
		);
	}
}
