import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { firebaseConnect, pathToJS, isLoaded } from 'react-redux-firebase'

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
    if (!isLoaded(this.props.auth)) {
      return (
        <p>LOADING AUTH</p>
      );
    }

    if (!this.props.auth) { // not logged in
      return(
        <div className='sidebar-menu'>
          <div className='sidebar-menu__heading'>Actions</div>
          <ul className='sidebar-menu__list'>
            <li className='sidebar-menu__item'><Link to="/">Login</Link></li>
          </ul>
          <form onSubmit={this.login}>
            <input type="text" placeholder="email" ref={this.setEmailRef} />
            <input type="password" placeholder="password" ref={this.setPasswordRef} />
            <button type="submit">Login</button>
          </form>
        </div>
      );
    } else { // logged in
      const { profile } = this.props;

      if (!isLoaded(profile)) return (<p>LOADING PROFILE</p>); // make this look prettier

      if (profile.role === 'admin') {
        return(
          <div className='sidebar-menu'>
            <div className='sidebar-menu__heading'>Actions</div>
            <ul className='sidebar-menu__list'>
              <li className='sidebar-menu__item'>
                <Link to="/addmovie"><span className='typcn typcn-plus' />Add movie</Link>
              </li>
              <li className='sidebar-menu__item'>
                <Link to="/schedule"><span className='typcn typcn-calendar' />Check schedule</Link>
              </li>
              <li className='sidebar-menu__item'>
                <a href="#" onClick={this.logout}><span className='typcn typcn-eject' />Log out</a>
              </li>
            </ul>
          </div>
        );
      } else if (profile.role === 'member') {
        return(
          <div className='sidebar-menu'>
            <div className='sidebar-menu__heading'>Actions</div>
            <ul className='sidebar-menu__list'>
              <li className='sidebar-menu__item'>
                <a href="#" onClick={this.logout}><span className='typcn typcn-eject' />Log out</a>
              </li>
            </ul>
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
