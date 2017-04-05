import React, {Component} from 'react';

export class Discussion extends Component {
  constructor(props) {
    super(props);

    this.state = {commentsDiv: null};
    this.storeCommentsDiv = this.storeCommentsDiv.bind(this);
    this.autoResize = this.autoResize.bind(this);
  }

  storeCommentsDiv(commentsDiv) {
    this.setState({commentsDiv});

    if (commentsDiv)
      commentsDiv.scrollTop = commentsDiv.scrollHeight;
  }

  // resizes the AddComment textarea whenever the input event is triggered,
  // this function will also make sure that the Comments div stays scrolled to the bottom (if it's there)
  // inspired by: https://maximilianhoffmann.com/posts/autoresizing-textareas
  autoResize(e) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Determine_if_an_element_has_been_totally_scrolled
    const hasBeenTotallyScrolled = this.state.commentsDiv.scrollHeight - this.state.commentsDiv.scrollTop === this.state.commentsDiv.clientHeight;

    const textarea = e.currentTarget;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight+'px';
    textarea.scrollTop = textarea.scrollHeight;
    window.scrollTo(window.scrollLeft,(textarea.scrollTop + textarea.scrollHeight));

    if (hasBeenTotallyScrolled)
      this.state.commentsDiv.scrollTop = this.state.commentsDiv.scrollHeight;
  }

  render() {
    const tempMovieInfo = {
      poster_path: 'http://image.tmdb.org/t/p/w342/ChTLC17F4nIjA7jP4F6QX9A8FJ.jpg',
      title: 'Ginger Snaps',
      overview: "The story of two outcast sisters, Ginger (Katharine Isabelle) and Brigitte (Emily Perkins), in the mindless suburban town of Bailey Downs. On the night of Ginger's first period, she is savagely attacked by a wild creature. Ginger's wounds miraculously heal but something is not quite right. Now Brigitte must save her sister and save herself.",
      release_date: '2000-08-01'
    };

    return (
      <div className='discussion'>
        <MovieInfo info={tempMovieInfo} />
        <div className='discussion__content'>
          <Comments storeCommentsDiv={this.storeCommentsDiv} />
          <AddComment onInput={this.autoResize} />
        </div>
      </div>
    );
  }
}

class MovieInfo extends Component {
  // the datestring is formatted like YYYY-MM-DD and we only want YYYY.
  datestring2year(datestring) {
    return datestring.slice(0, 4);
  }

  render() {
    return (
      <div className='movie-info'>
        <img src={this.props.info.poster_path} />
        <div className='movie-info__content'>
          <h4>{this.props.info.title + ' (' + this.datestring2year(this.props.info.release_date) + ')'}</h4>
          <p>{this.props.info.overview}</p>
        </div>
      </div>
    );
  }
}

class Comments extends Component {
  constructor(props) {
    super(props);

    this.callStoreCommentsDiv = this.callStoreCommentsDiv.bind(this);
  }

  // NOTE: If this is called inline (using fat arrow) there will be an infinite loop because react is stupid when it comes to refs.
  callStoreCommentsDiv(commentsDiv) {
    this.props.storeCommentsDiv(commentsDiv);
  }

  render() {
    const tempComments = [
      {
        author: 'AGoodBoy',
        date: '2013/05/12',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis porttitor ipsum. Pellentesque vel nulla ut nunc rhoncus accumsan. Nunc eleifend leo vitae nibh mattis, et porta elit consequat. Proin non arcu dui. Nulla a metus luctus, rhoncus odio in, commodo purus. Nulla consectetur venenatis pellentesque. Proin eu augue bibendum, dictum justo non, faucibus dui. Orci varius natoque penatibus et.',
        key: 0
      }, {
        author: 'ABadBoy',
        date: '2002/11/22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lectus id efficitur facilisis. Sed bibendum risus nibh. Suspendisse eleifend neque sagittis tortor fermentum commodo. Cras faucibus in lacus ac tincidunt. Morbi eget ipsum vehicula, eleifend nisl a, suscipit arcu. Nullam faucibus nulla iaculis nunc dapibus, eu dapibus ex tempus. Sed congue eget metus nec ornare. Morbi efficitur ipsum in.',
        key: 1
      }, {
        author: 'ABadBoy',
        date: '2002/11/22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lectus id efficitur facilisis. Sed bibendum risus nibh. Suspendisse eleifend neque sagittis tortor fermentum commodo. Cras faucibus in lacus ac tincidunt. Morbi eget ipsum vehicula, eleifend nisl a, suscipit arcu. Nullam faucibus nulla iaculis nunc dapibus, eu dapibus ex tempus. Sed congue eget metus nec ornare. Morbi efficitur ipsum in.',
        key: 2
      }, {
        author: 'ABadBoy',
        date: '2002/11/22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lectus id efficitur facilisis. Sed bibendum risus nibh. Suspendisse eleifend neque sagittis tortor fermentum commodo. Cras faucibus in lacus ac tincidunt. Morbi eget ipsum vehicula, eleifend nisl a, suscipit arcu. Nullam faucibus nulla iaculis nunc dapibus, eu dapibus ex tempus. Sed congue eget metus nec ornare. Morbi efficitur ipsum in.',
        key: 3
      }, {
        author: 'ABadBoy',
        date: '2002/11/22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lectus id efficitur facilisis. Sed bibendum risus nibh. Suspendisse eleifend neque sagittis tortor fermentum commodo. Cras faucibus in lacus ac tincidunt. Morbi eget ipsum vehicula, eleifend nisl a, suscipit arcu. Nullam faucibus nulla iaculis nunc dapibus, eu dapibus ex tempus. Sed congue eget metus nec ornare. Morbi efficitur ipsum in.',
        key: 4
      }, {
        author: 'ABadBoy',
        date: '2002/11/22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lectus id efficitur facilisis. Sed bibendum risus nibh. Suspendisse eleifend neque sagittis tortor fermentum commodo. Cras faucibus in lacus ac tincidunt. Morbi eget ipsum vehicula, eleifend nisl a, suscipit arcu. Nullam faucibus nulla iaculis nunc dapibus, eu dapibus ex tempus. Sed congue eget metus nec ornare. Morbi efficitur ipsum in.',
        key: 5
      }, {
        author: 'ABadBoy',
        date: '2002/11/22',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lectus id efficitur facilisis. Sed bibendum risus nibh. Suspendisse eleifend neque sagittis tortor fermentum commodo. Cras faucibus in lacus ac tincidunt. Morbi eget ipsum vehicula, eleifend nisl a, suscipit arcu. Nullam faucibus nulla iaculis nunc dapibus, eu dapibus ex tempus. Sed congue eget metus nec ornare. Morbi efficitur ipsum in.',
        key: 6
      }
    ];

    return (
      <div className='comments' ref={this.callStoreCommentsDiv}>
        {tempComments.map((comment) => (<Comment commentData={comment} key={comment.key} />))}
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <strong className='comment__author'>{this.props.commentData.author}</strong>
        <span className='comment__date'>{this.props.commentData.date}</span>
        <p className='comment__text'>{this.props.commentData.text}</p>
        <hr />
      </div>
    );
  }
}


class AddComment extends Component {
  render() {
    return (
      <form className='add-comment'>
        <textarea className='add-comment__input' placeholder='Leave a comment' rows='1' onInput={this.props.onInput} />
        <button className='add-comment__submit' type='submit'>Submit</button>
      </form>
    );
  }
}