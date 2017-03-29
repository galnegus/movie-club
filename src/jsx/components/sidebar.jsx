import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Sidebar extends Component {
  render() {
  	return (
  	  <div className="sidebar">
  	  	<Login />
  	  	<h1>sidebar</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/addmovie">Add movie</Link></li>
        </ul>
  	  </div>
    );
  }
}


class Login extends Component{
	render(){
	  return(
		<div>
		  <h1>Login/Logout</h1>
		</div>
	  );
	}
}
