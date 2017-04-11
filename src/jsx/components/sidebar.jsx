import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './sidebar/login.jsx';
import { Watched } from './sidebar/watched.jsx';

export class Sidebar extends Component {
  render() {
  	return (
  	  <div className="sidebar">
        <Login />
        <div>
          <Watched />
        </div>
  	  </div>
    );
  }
}
