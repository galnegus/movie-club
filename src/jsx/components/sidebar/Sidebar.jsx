import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.jsx';
import Watched from './Watched.jsx';

export default class Sidebar extends Component {
  render() {
  	return (
  	  <div className='sidebar'>
        <h3 className='sidebar-title'>
          <Link to='/'>MOVIECLUB</Link>
        </h3>
        <Login />
        <div>
          <Watched />
        </div>
  	  </div>
    );
  }
}
