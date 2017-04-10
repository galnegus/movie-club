import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export class Search extends Component{
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
      axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/search/movie',
        params:{
          api_key: 'a4eb585b085da1972100342a6d21c935',
          query: this.inputRef.value,
        }
      }).then(response => {
        console.log("results = ", response.data)
        this.props.handleSearch(response.data);  
      });
      // console.log("e value = ", e.target.value);      
  }

  render(){
  	return(
      <form className='add-movie-search' onSubmit={this.onSubmit}>
  		  <input className='add-movie-search__input' ref={(inputRef) => this.inputRef = inputRef} type="text" placeholder="Search for a movie" />
      </form>
  	);
  }
}