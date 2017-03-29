import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class AddMovie extends Component{
  render(){
  	return(
  	  <div>
    		<Search />
    		<Results />
  	  </div>
  	);
  }
}

class Search extends Component{
  render(){
  	return(
  	  <div>
  		  <input type="search" placeholder="Search" />
  	  </div>
  	);
  }
}

class Results extends Component{
  render(){
  	return(
  	  <div>
    		<Result />
    		<Result />
    		<Result />
  	  </div>
  	);
  }
}


class Result extends Component{
  render(){
  	return(
  	  <div>
  		  <h3>movie</h3>
  	  </div>
  	);
  }
}
