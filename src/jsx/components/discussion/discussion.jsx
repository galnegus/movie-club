import React, {Component} from 'react';
import MovieInfo from './MovieInfo.jsx';
import Comments from './comments.jsx';
import AddComment from './add-comment.jsx';
import MovieHeader from './MovieHeader.jsx';
import Comment from './comment.jsx';
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
    const { movies } = this.props;
    const { comments } = this.props;
    let movieID;
    let movie;
    let commentList;


    if(!isLoaded(movies)){
      return(
        <div className='loader loader--medium' />
      );
    }

    if(!this.props.location.pathname.substring(1)){
        const current_year_week = moment().format('YYYY-ww');
        movieID = Object.keys(movies).find( key => movies[key].year_week === current_year_week);
    }else{
        movieID = Object.keys(movies).find( key => movies[key].year_week === this.props.location.pathname.substring(12));
    }
    
    Object.keys(movies).forEach( key => {
        if (key === movieID){
            movie = movies[key];
        }
    });

    if(!isLoaded(comments)){
      commentList = (<div>Loading</div>);
    } else if(isEmpty(comments)){
      commentList = (<div>There are no comments. Be the first one to add a comment!</div>);
    } else {
      commentList = Object.keys(comments)
        .map(key => comments[key])
        .sort((a, b) => {
          if (a.date < b.date) return -1;
          if (a.date > b.date) return 1;
          return 0;
        })
        .filter(comment => comment.movieid === movieID)
        .map(comment => (<Comment commentData={comment} key={comment.date} />));
    }

    return (
      <div className='discussion'>
        <MovieHeader info={movie} numberOfComments={commentList.length} />
        <div className='discussion__content-scroll'>
          <div className='discussion__content'>
            <MovieInfo {...movie}  />
            <hr className='discussion-separator' />
            <Comments commentList={commentList}  storeCommentsDiv={this.storeCommentsDiv} />
          </div>
        </div>
        <AddComment movieID={movieID} yearWeek={movie.year_week} resizeTextarea={this.resizeTextarea} />
      </div>
    );
  }
}

const wrappeddiscussion = firebaseConnect([
  '/movies', '/comments#orderByValue' 
])(Discussion);
export default connect(({ firebase }) => ({
  movies: dataToJS(firebase, 'movies'),
  comments: dataToJS(firebase, 'comments'),
}), dispatch => ({
    dispatchIsLoadingDiscussion: (value) => dispatch(isLoadingDiscussion(value))
  })
)(wrappeddiscussion);


