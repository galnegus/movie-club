import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
        user: null,
        // user: "admin",
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


class Login extends Component{
  render(){
    if(!this.props.user){
      return(
        <div>
          <h3>Login</h3>
          <Link to="/">Home</Link>
          <input type="text" placeholder="username"></input>
          <input type="text" placeholder="password"></input>
          <button type="submit">Login</button>
        </div>
      );
    } else if(this.props.user === "admin") {
      return(
        <div>
            <div> Cool Guy </div>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/addmovie">Add movie</Link></div>
            <div><Link to="/schedule">Schedule</Link></div>
            <div>Logout</div>
        </div>
      );
    } else if(this.props.user === "member") {
      return(
        <div>
          <div> Cool Guy </div>
          <div><Link to="/">Home</Link></div>
          <div> Logout </div>
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