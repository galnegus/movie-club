import React, {Component} from 'react';
import MovieInfo from './MovieInfo.jsx';
import Comments from './Comments.jsx';
import AddComment from './AddComment.jsx';
import MovieHeader from './MovieHeader.jsx';
import Comment from './Comment.jsx';
import { connect } from 'react-redux';
import { firebaseConnect, pathToJS, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';
import { isLoadingDiscussion } from '../../actions';
import moment from 'moment';

class Discussion extends Component {
  constructor(props) {
    super(props);

    this.state = {commentsDiv: null};
    this.storeCommentsDiv = this.storeCommentsDiv.bind(this);
    this.resizeTextarea = this.resizeTextarea.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (isLoaded(nextProps.comments) && isLoaded(nextProps.movies))
      nextProps.dispatchIsLoadingDiscussion(false);
  }

  storeCommentsDiv(commentsDiv) {
    this.setState({commentsDiv});
  }

  // resizes the AddComment textarea whenever the input event is triggered,
  // this function will also make sure that the Comments div stays scrolled to the bottom (if it's there)
  // inspired by: https://maximilianhoffmann.com/posts/autoresizing-textareas
  resizeTextarea(textarea) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Determine_if_an_element_has_been_totally_scrolled
    const hasBeenTotallyScrolled = this.state.commentsDiv.scrollHeight - this.state.commentsDiv.scrollTop === this.state.commentsDiv.clientHeight;

    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight+'px';
    textarea.scrollTop = textarea.scrollHeight;
    window.scrollTo(window.scrollLeft,(textarea.scrollTop + textarea.scrollHeight));

    if (hasBeenTotallyScrolled)
      this.state.commentsDiv.scrollTop = this.state.commentsDiv.scrollHeight;
  }


  render() {
    const { movies, comments } = this.props;

    if (!isLoaded(movies)) {
      return (<div className='loader loader--medium' />);
    }

    let movieId;
    const currentYearWeek = moment().format('YYYY-ww');
    if (!this.props.location.pathname.substring(1)) {
      movieId = Object.keys(movies).find(key => movies[key].year_week === currentYearWeek);
    } else {
      movieId = Object.keys(movies).find(key => movies[key].year_week === this.props.location.pathname.substring(12));
    }


    
    let movie;
    Object.keys(movies).forEach(key => {
      if (key === movieId){
        movie = movies[key];
      }
    });

    // fallback if there's no movie this week, show the last one
    if (typeof movie === 'undefined') {
      const sortedMovies = Object.keys(movies)
        .map(key => movies[key])
        .sort((a, b) => {
          if (a.year_week < b.year_week) return 1;
          if (a.year_week > b.year_week) return -1;
          return 0;
        })
        .filter(movie => movie.year_week < currentYearWeek);
        console.dir(sortedMovies);
        movie = sortedMovies[0];
    }



    let commentList;
    if (!isLoaded(comments)) {
      commentList = (<div>Loading</div>);
    } else if (isEmpty(comments)) {
      commentList = (<div>There are no comments.</div>);
    } else {
      commentList = Object.keys(comments)
        .map(key => comments[key])
        .sort((a, b) => {
          if (a.date < b.date) return -1;
          if (a.date > b.date) return 1;
          return 0;
        })
        .filter(comment => comment.movieid === movieId)
        .map(comment => (<Comment commentData={comment} key={comment.date} />));
    }

    const nComments = commentList.length;
    if (nComments === 0)
      commentList = (<div>There are no comments.</div>);

    return (
      <div className='discussion'>
        <MovieHeader info={movie} numberOfComments={nComments} />
        <div className='discussion__content-scroll'>
          <div className='discussion__content'>
            <MovieInfo {...movie}  />
            <hr className='discussion-separator' />
            <Comments commentList={commentList}  storeCommentsDiv={this.storeCommentsDiv} />
          </div>
        </div>
        <AddComment movieId={movieId} yearWeek={movie.year_week} resizeTextarea={this.resizeTextarea} />
      </div>
    );
  }
}

const wrappedDiscussion = firebaseConnect([
  '/movies', '/comments#orderByValue' 
])(Discussion);

export default connect(({ firebase }) => ({
  movies: dataToJS(firebase, 'movies'),
  comments: dataToJS(firebase, 'comments'),
}), dispatch => ({
  dispatchIsLoadingDiscussion: (value) => dispatch(isLoadingDiscussion(value))
}))(wrappedDiscussion);
