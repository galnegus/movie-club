import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MovieRow from './movie-row.jsx';

export class MovieTable extends Component{
  render(){
    var rows = [];
    if(this.props.movies){
      this.props.movies.forEach( movie => {
        rows.push( <MovieRow {...movie} key={movie.id} api_data={movie} />)
      });
    }

  	return(
  	  <ul className='add-movie-results'>
        {rows}
  	  </ul>
  	);
  }
}
