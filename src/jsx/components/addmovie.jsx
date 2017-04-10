import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Search} from './search.jsx';
import {MovieTable} from './movietable.jsx'

export class AddMovie extends Component{
  constructor() {
    super();
    this.state = {
      searchResults: {},
    };
    this.handleSearch=this.handleSearch.bind(this);
  }

  handleSearch(results){
    this.setState({searchResults: results});
  }

  render(){
  	return(
  	  <div className='add-movie-container'>
    		<Search handleSearch={this.handleSearch} />
    		<MovieTable movies={this.state.searchResults.results} />
  	  </div>
  	);
  }
}


