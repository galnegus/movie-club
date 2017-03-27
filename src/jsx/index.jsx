import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Sidebar} from './components/sidebar.jsx';
import {Discussion} from './components/discussion.jsx';
import '../less/main.less';

function CoolRouter() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Route path="/" component={Discussion} />
      </div>
    </Router>
  );
}

ReactDOM.render(
  <CoolRouter />,
  document.getElementById('root')
);
