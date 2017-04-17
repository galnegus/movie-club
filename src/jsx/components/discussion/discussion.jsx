import React, {Component} from 'react';
import MovieInfo from './movie-info.jsx';
import Comments from './comments.jsx';
import AddComment from './add-comment.jsx';
import MovieHeader from './MovieHeader.jsx';

export class Discussion extends Component {
  constructor(props) {
    super(props);

    this.state = {commentsDiv: null};
    this.storeCommentsDiv = this.storeCommentsDiv.bind(this);
    this.resizeTextarea = this.resizeTextarea.bind(this);
  }

  storeCommentsDiv(commentsDiv) {
    this.setState({commentsDiv});

    if (commentsDiv)
      commentsDiv.scrollTop = commentsDiv.scrollHeight;
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
    const tempMovieInfo = {
      poster_path: 'http://image.tmdb.org/t/p/w154/ChTLC17F4nIjA7jP4F6QX9A8FJ.jpg',
      title: 'Ginger Snaps',
      overview: "The story of two outcast sisters, Ginger (Katharine Isabelle) and Brigitte (Emily Perkins), in the mindless suburban town of Bailey Downs. On the night of Ginger's first period, she is savagely attacked by a wild creature. Ginger's wounds miraculously heal but something is not quite right. Now Brigitte must save her sister and save herself.",
      release_date: '2000-08-01'
    };

    return (
      <div className='discussion'>
        <MovieHeader />
        <div className='discussion__content-scroll'>
          <div className='discussion__content'>
            <MovieInfo info={tempMovieInfo} />
            <hr className='discussion-separator' />
            <Comments storeCommentsDiv={this.storeCommentsDiv} />
          </div>
        </div>
        <AddComment resizeTextarea={this.resizeTextarea} />
      </div>
    );
  }
}
