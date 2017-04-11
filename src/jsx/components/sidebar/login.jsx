import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { firebaseConnect, pathToJS } from 'react-redux-firebase'

class Login extends Component{
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.setEmailRef = this.setEmailRef.bind(this);
    this.setPasswordRef = this.setPasswordRef.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(e) {
    e.preventDefault();

    this.props.firebase.login({
      email: this.emailInput.value,
      password: this.passwordInput.value
    });
  }

  logout(e) {
    e.preventDefault();
    this.props.firebase.logout();
  }

  setEmailRef(input) {
    this.emailInput = input;
  }

  setPasswordRef(input) {
    this.passwordInput = input;
  }

  render(){
    if (!this.props.auth) { // not logged in
      return(
        <div className='sidebar-menu'>
          <ul className='sidebar-menu__list'>
            <li className='sidebar-menu__item'><Link to="/">Home</Link></li>
          </ul>
          <form onSubmit={this.login}>
            <input type="text" placeholder="email" ref={this.setEmailRef} />
            <input type="password" placeholder="password" ref={this.setPasswordRef} />
            <button type="submit">Login</button>
          </form>
          <hr />
        </div>
      );
    } else { // logged in
      const { profile } = this.props;

      if (!profile) return (<p>Loading</p>); // make this look prettier

      if (profile.role === 'admin') {
        return(
          <div className='sidebar-menu'>
            <strong className='sidebar-menu__heading'>Cool Guy</strong>
            <ul className='sidebar-menu__list'>
              <li className='sidebar-menu__item'><Link to="/">Home</Link></li>
              <li className='sidebar-menu__item'><Link to="/addmovie">Add movie</Link></li>
              <li className='sidebar-menu__item'><Link to="/schedule">Schedule</Link></li>
              <li className='sidebar-menu__item'><a href="#" onClick={this.logout}>Logout</a></li>
            </ul>
            <hr />
          </div>
        );
      } else if (profile.role === 'member') {
        return(
          <div className='sidebar-menu'>
            <strong className='sidebar-menu__heading'>Cool Guy</strong>
            <ul className='sidebar-menu__list'>
              <li className='sidebar-menu__item'><Link to="/">Home</Link></li>
              <li className='sidebar-menu__item'><a href="#" onClick={this.logout}>Logout</a></li>
            </ul>
            <hr />
          </div>
        );
      } else { // unknown role?
        return (<p>Who is this?</p>);
      }
    }
  }
}

const wrappedLogin = firebaseConnect()(Login);
export default connect(({ firebase }) => ({
  auth: pathToJS(firebase, 'auth'),
  profile: pathToJS(firebase, 'profile')
}))(wrappedLogin);
