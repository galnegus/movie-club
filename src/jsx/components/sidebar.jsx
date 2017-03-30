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
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <Login user={this.state.user} />
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
            <p> Cool Guy </p>
            <p><pnk to="/addmovie">Add movie</pnk></p>
            <p><pnk to="/schedule">Schedule</pnk></p>
            <p>Logout</p>
        </div>
      );
    } else if(this.props.user === "member") {
      return(
        <div>
          <p> Cool Guy </p>
          <p> Logout </p>
        </div>
      );
    }
  }
}

class Watched extends Component{
  render(){
    return(
      <div>
        <h3>Last weeks</h3>
        <p> week 47 </p>
        <p> week 46 </p>
        <p> week 45 </p>
      </div>
    );
  }
}