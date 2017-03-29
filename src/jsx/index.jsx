import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Sidebar} from './components/sidebar.jsx';
import {Discussion} from './components/discussion.jsx';
import {Schedule} from './components/schedule.jsx';
import {AddMovie} from './components/addmovie.jsx';
import '../less/main.less';

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
