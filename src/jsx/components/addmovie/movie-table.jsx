import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MovieRow from './movie-row.jsx';

export class MovieTable extends Component{
  render(){
    var rows = [];
    if(this.props.movies){
      if(this.props.movies.length == 0){
        rows = 'No movie was found'
      } else {      
        this.props.movies.forEach( movie => {
          rows.push( <MovieRow {...movie} key={movie.id} />)
        });
      }
    }

  	return(
  	  <ul className='add-movie-results'>
        {rows}
  	  </ul>
  	);
  }
}
