import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Search} from './addmovie/search.jsx';
import MovieTable from './addmovie/movie-table.jsx'

export class AddMovie extends Component{
  constructor() {
    super();
    this.state = {
      searchResults: {},
      showLoader: false
    };

    this.handleSearch=this.handleSearch.bind(this);
  }

  handleSearch(promise){
    this.setState({
      searchResults: {},
      showLoader: true
    });
    promise.then(response => {
      this.setState({
        searchResults: response.data,
        showLoader: false
      });
    }).catch(response => {
      console.error(response);
    });
  }

  render(){
    return (
      <div className='add-movie-container'>
        <Search handleSearch={this.handleSearch} />
        {this.state.showLoader ? 
          (<div className='add-movie-loader loader loader--medium' />) 
        : ''}
        <MovieTable searchResults={this.state.searchResults.results} />
      </div>
    );
  }
}


