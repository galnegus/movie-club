import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import { Rating } from 'material-ui-rating'

export class Discussion extends Component {
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
          <Comments />
          <AddComment />
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
        <Rating
          value={3}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
        />
        <h3>{this.props.info.title + ' (' + this.datestring2year(this.props.info.release_date) + ')'}</h3>
        <p>{this.props.info.overview}</p>
      </div>
    );
  }
}

class Comments extends Component {
  render() {
    const tempComments = [
      {
        author: 'AGoodBoy',
        date: '2013/05/12',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis porttitor ipsum. Pellentesque vel nulla ut nunc rhoncus accumsan. Nunc eleifend leo vitae nibh mattis, et porta elit consequat. Proin non arcu dui. Nulla a metus luctus, rhoncus odio in, commodo purus. Nulla consectetur venenatis pellentesque. Proin eu augue bibendum, dictum justo non, faucibus dui. Orci varius natoque penatibus et.',
        key: 0
      }, {
        author: 'ABadBoy',
        date: '2002/11/22',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra lectus id efficitur facilisis. Sed bibendum risus nibh. Suspendisse eleifend neque sagittis tortor fermentum commodo. Cras faucibus in lacus ac tincidunt. Morbi eget ipsum vehicula, eleifend nisl a, suscipit arcu. Nullam faucibus nulla iaculis nunc dapibus, eu dapibus ex tempus. Sed congue eget metus nec ornare. Morbi efficitur ipsum in.',
        key: 1
      }
    ];

    return (
      <div>
        {tempComments.map((comment) => <Comment commentData={comment} key={comment.key} />)}
      </div>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <div>
        <span>{this.props.commentData.author}</span>
        <span>{this.props.commentData.date}</span>
        <p>{this.props.commentData.comment}</p>
      </div>
    );
  }
}

class AddComment extends Component {
  render() {
    return (
      <div>
        <h4>Add comment/review</h4>
        <TextField
          multiLine={true}
          rows={2}
          rowsMax={4}
          floatingLabelText="Put the text here"
          fullWidth={true}
        />
        <RaisedButton label="Submit" />
      </div>
    );
  }
}