import React, {Component} from 'react';

export class Discussion extends Component {
  render() {
    return (
      <div className="discussion">
        <MovieInfo />
        <Comments />
        <AddComment />
      </div>
    );
  }
}

class MovieInfo extends Component {
  render() {
    return (
      <h1>Wow</h1>
    );
  }
}

class Comments extends Component {
  render() {
  return (
    <div>
      <Comment />
      <Comment />
    </div>
  );
  }
}

class Comment extends Component {
  render() {
    return (
      <div>
        <h1>wow</h1>
        <p>wowowowo</p>
      </div>
    );
  }
}

class AddComment extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="wow" />
      </div>
    );
  }
}