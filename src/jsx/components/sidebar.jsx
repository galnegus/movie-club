import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Login } from './sidebar/login.jsx';
import { Watched } from './sidebar/watched.jsx';

export class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
        // user: null,
         user: "admin",
        // user: "member",
    };
  }

  render() {
  	return (
  	  <div className="sidebar">
        <Login user={this.state.user} />
        <div>
          <Watched />
        </div>
  	  </div>
    );
  }
}
