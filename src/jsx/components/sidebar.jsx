import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <div>
          <Watched />
        </div>
  	  </div>
    );
  }
}


class Login extends Component{
  render(){
    if(!this.props.user){
      return(
        <div>
          <h1>Login</h1>
          <input type="text" placeholder="username"></input>
          <input type="text" placeholder="password"></input>
          <button type="submit">Login</button>
        </div>
      );
    } else if(this.props.user === "admin") {
      return(
        <div>
          <ul>
            <li><Link to="/addmovie">Add movie</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
            <li>Logout</li>
          </ul>
        </div>
      );
    } else if(this.props.user === "member") {
      return(
        <div>
          <ul>
            <li>Logout</li>
          </ul>
        </div>
      );
    }
  }
}

class Watched extends Component{
  render(){
    return(
      <div>
        <h2>Last weeks</h2>
      </div>
    );
  }
}