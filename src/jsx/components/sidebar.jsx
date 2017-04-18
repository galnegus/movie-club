import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './sidebar/login.jsx';
import Watched from './sidebar/watched.jsx';

export class Sidebar extends Component {
  render() {
  	return (
  	  <div className='sidebar'>
        {/*
        <h3 className='sidebar-title'>
          <Link to='/'>MOVIECLUB</Link>
        </h3>
        */}
        <Login />
        <div>
          <Watched />
        </div>
  	  </div>
    );
  }
}
