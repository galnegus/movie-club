import React, {Component} from 'react';

export class Sidebar extends Component {
  render() {
  	return (
  	  <div className="sidebar">
  	  	<Login />
  	  	<h1>sidebar </h1>
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
