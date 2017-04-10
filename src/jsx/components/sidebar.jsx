import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Login } from './login.jsx';
import { Watched } from './watched.jsx';

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
