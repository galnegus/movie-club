import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { Sidebar } from './sidebar.jsx';
import { Discussion } from './discussion/discussion.jsx';
import Schedule from './schedule.jsx';
import { AddMovie } from './add-movie.jsx';
import LoadingOverlay from './LoadingOverlay.jsx';

class App extends Component {
  render() {
    const { isLoading, history } = this.props;
    let overlay = <LoadingOverlay />;

    const doneLoadingSidebar = isLoading.sidebar;
    const doneLoadingDiscussion = isLoading.comments && isLoading.addComment;
    if ((history.location.pathname === '/' && doneLoadingSidebar && doneLoadingDiscussion)
      || history.location.pathname !== '/' && doneLoadingSidebar)
      overlay = '';

    return (
      <div>
        <Sidebar />
        <div className='content'>
          <Route exact path='/' component={Discussion} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/addmovie' component={AddMovie} />
        </div>
        {overlay}
      </div>
    );
  }
}

export default withRouter(connect(
  ({ isLoading }) => {
    return {isLoading: isLoading}
  }
)(App));
