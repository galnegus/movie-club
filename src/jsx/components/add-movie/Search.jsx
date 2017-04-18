import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Search extends Component{
  constructor() {
    super();
    this.state = {
       searchResults: {}
    };

    this.onSubmit=this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.inputRef.focus();
  }

  onSubmit(e) {
    e.preventDefault();
    const promise = axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/search/movie',
      params:{
        api_key: 'a4eb585b085da1972100342a6d21c935',
        query: this.inputRef.value,
      }
    });

    this.props.handleSearch(promise);
  }

  render(){
  	return(
      <form className='add-movie-search' onSubmit={this.onSubmit}>
  		  <input className='add-movie-search__input' ref={(inputRef) => this.inputRef = inputRef} type='text' placeholder='Search for a movie' />
        <button className='add-movie-search__button' type='submit'><span className='typcn typcn-zoom' /></button>
      </form>
  	);
  }
}