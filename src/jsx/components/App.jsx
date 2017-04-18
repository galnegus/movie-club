import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { Sidebar } from './sidebar.jsx';
import { Discussion } from './discussion/discussion.jsx';
import Schedule from './schedule/Schedule.jsx';
import { AddMovie } from './add-movie/AddMovie.jsx';
import LoadingOverlay from './LoadingOverlay.jsx';
import Notifications from 'react-notification-system-redux';
import notificationStyle from './notification-style';

class App extends Component {
  render() {
    const { isLoading, history, notifications } = this.props;
    let overlay;

    const doneLoadingSidebar = !isLoading.sidebar;
    const doneLoadingDiscussion = !isLoading.comments && !isLoading.addComment;
    if ((history.location.pathname === '/' && doneLoadingSidebar && doneLoadingDiscussion)
      || history.location.pathname !== '/' && doneLoadingSidebar)
      overlay = '';
    else
      overlay = (<LoadingOverlay />);

    return (
      <div>
        <Sidebar />
        <div className='content'>
          <Route exact path='/' component={Discussion} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/add-movie/:yearWeek' component={AddMovie} />
        </div>
        {overlay}
        <Notifications notifications={notifications} style={notificationStyle} />
      </div>
    );
  }
}

export default withRouter(connect(
  ({ isLoading, notifications }) => {
    return {
      isLoading,
      notifications
    }
  }
)(App));
