import React, {Component} from 'react';

export class Schedule extends Component{
	constructor() {
		super();
		const weeksData = [
			{51:{"title":"Star Wars", "year":"1990", "poster":""}},
			{50:{"title":"Star Wars2", "year":"1992", "poster":""}},
			{49:{"title":"Star Wars4", "year":"1994", "poster":""}},
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
								currentWeek={this.state.currentWeek === parseInt(id) ? "!! Current Week !!" : null} /> )
			});
		}

		return(
				<div>
					{rows}
				</div>
			);
		}
	}

class Week extends Component{
	render(){
		if(this.props.currentWeek == this){

		}
		return(
			<div>
				<div>Week:{this.props.weekNumber} , {this.props.title} (year:{this.props.year}) , {this.props.currentWeek}</div>
			</div>
		);
	}
}
