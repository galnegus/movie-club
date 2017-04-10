import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {Sidebar} from './components/sidebar.jsx';
import {Discussion} from './components/discussion/discussion.jsx';
import {Schedule} from './components/schedule.jsx';
import {AddMovie} from './components/addmovie.jsx';
import '../less/main.less';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// (also see: http://www.material-ui.com/#/get-started/installation)
injectTapEventPlugin();

function CoolRouter() {
  return (
    <Router>
      <div>
        <Sidebar />
        <div className="content">
          <Route exact path="/" component={Discussion} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/addmovie" component={AddMovie} />
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <CoolRouter />,
  document.getElementById('root')
);
