import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar.jsx';
import Discussion from './discussion/Discussion.jsx';
import Schedule from './schedule/Schedule.jsx';
import AddMovie from './add-movie/AddMovie.jsx';
import LoadingOverlay from './LoadingOverlay.jsx';
import Notifications from 'react-notification-system-redux';
import notificationStyle from '../notification-style';

// this class only exists because of some weird bug with react-redux-firebase that causes
// the removal of videos not to update the redux store immediately after adding a movie UNLESS you first visit another route, 
// so this is the stupid fix for that problem!
class RedirectToSchedule extends Component {
  render() {
    return <Redirect to='/schedule' />;
  }
}

class App extends Component {
  render() {
    const { isLoading, history, notifications } = this.props;
    let overlay;

    const doneLoadingSidebar = !isLoading.sidebar;
    const doneLoadingDiscussion = !isLoading.discussion;
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
          <Route path='/redirect' component={RedirectToSchedule} />
          <Route path='/add-movie/:yearWeek' component={AddMovie} />
          <Route path='/discussion/:yearweek' component={Discussion} />
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
