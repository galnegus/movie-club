import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import moment from 'moment';
import Search from './Search.jsx';
import MovieTable from './MovieTable.jsx'

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
    const date = moment(this.props.match.params.yearWeek, 'YYYY-ww');
    const year = date.format('YYYY');
    const week = date.format('ww');

    return (
      <div>
        <div className='add-movie-header'>
          <h2>Add movie</h2>
          <p>Add the movie you want to discuss in week <strong>{week}</strong> of <strong>{year}</strong> by searching for its title below.</p>
        </div>
        <div className='add-movie-container'>
          <Search handleSearch={this.handleSearch} />
          {this.state.showLoader ? 
            (<div className='add-movie-loader loader loader--medium' />) 
          : ''}
          <MovieTable searchResults={this.state.searchResults.results} yearWeek={this.props.match.params.yearWeek} />
        </div>
      </div>
    );
  }
}


