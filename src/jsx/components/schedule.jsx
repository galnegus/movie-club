import React, {Component} from 'react';

export class Schedule extends Component{
	constructor() {
		super();
		const weeksData = [
			{51:{"title":"Star Wars", "year":"1990", "poster":"http://image.tmdb.org/t/p/w185/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg"}},
			{50:{"title":"Star Wars2", "year":"1992", "poster":"http://image.tmdb.org/t/p/w185/4UrrUoVQ1Ft6g6uI4FQN6JrJwSQ.jpg"}},
			{49:{"title":"Star Wars4", "year":"1994", "poster":"http://image.tmdb.org/t/p/w185/6u1fYtxG5eqjhtCPDx04pJphQRW.jpg"}},
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
								currentWeek={this.state.currentWeek === parseInt(id) ? "!! Current Week !! " : null} /> )
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
		return(
			<div>
				<table >
					<tr>
						<th rowSpan="2"><img src={this.props.poster}></img></th>
						<th >Week:{this.props.weekNumber}</th>
					</tr>
					<tr>
						<th > {this.props.title} ({this.props.year}) <font color='#FF7F50'> {this.props.currentWeek}</font></th>
						<th colSpan="2">{this.props.overview}</th>
					</tr>
				</table>
			</div>
		);
	}
}
