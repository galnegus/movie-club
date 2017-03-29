import React, {Component} from 'react';

export class Schedule extends Component{
  render(){
	return(
	  <div>
		<Week />
		<Week />
	  </div>
	);
  }
}

class Week extends Component{
  render(){
	return(
	  <div>
		<div> week 51 </div>
	  </div>
	);
  }
}
