import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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


class Search extends Component{
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


class MovieTable extends Component{
  render(){
    var rows = [];
    if(this.props.movies){
      this.props.movies.forEach( movie => {
        //console.log("movie = ", movie.poster_path)
        rows.push( <MovieRow id={movie.id} 
                              key={movie.id}
                              title={movie.title}
                              overview={movie.overview}
                              poster_path={movie.poster_path}
                              release_date={movie.release_date} />)
      });
    }

  	return(
  	  <ul className='add-movie-results'>
        {rows}
  	  </ul>
  	);
  }
}





class MovieRow extends Component{
  // the datestring is formatted like YYYY-MM-DD and we only want YYYY.
  datestring2year(datestring) {
    return datestring.slice(0, 4);
  }

  render(){
    const src = "http://image.tmdb.org/t/p/w92" + this.props.poster_path;
  	return(
  	  <li className='add-movie-results__item'>
        <img className='add-movie-results__image' src={src}></img>
        <div className='add-movie-results__block'>
          <div className='add-movie-results__info'>
            <strong className='add-movie-results__title'>{this.props.title + ' (' + this.datestring2year(this.props.release_date) + ')'}</strong>
            <p className='add-movie-results__text'>{this.props.overview}</p>
          </div>
          <a href='#' className='add-movie-results__button' type="submit"><span className='typcn typcn-plus'></span></a>
        </div>
  	  </li>
  	);
  }
}
