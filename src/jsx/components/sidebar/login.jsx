import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { firebaseConnect, pathToJS, isLoaded, isEmpty } from 'react-redux-firebase'
import { isLoadingSidebar } from '../../actions';

class Login extends Component{
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidUpdate() {
    // change the store to reflect that the initial loading of the profile is done
    const { auth, profile, dispatchIsLoadingSidebar } = this.props;
    if (isLoaded(auth) && ((!isEmpty(auth) && isLoaded(profile)) || isEmpty(auth))) {
      dispatchIsLoadingSidebar(false);
    }
  }

  login(e) {
    e.preventDefault();
    const { dispatchIsLoadingSidebar, firebase } = this.props;

    dispatchIsLoadingSidebar(true);
    firebase.login({
      email: this.emailInput.value,
      password: this.passwordInput.value
    }).then(() => dispatchIsLoadingSidebar(false));
  }

  // after logging out we have to reload the page because logging out causes all of the existing firebase data in the store to be removed (for some reason),
  // this appears to be a bug with the react-redux-firebase plugin, so our quick fix is to just reload or redirect the page!
  // see: https://github.com/prescottprue/react-redux-firebase/issues/93
  logout(e) {
    e.preventDefault();
    this.props.firebase.logout().then(() => {
      window.location.href = '/'
    });
  }

  render(){
    const { auth, profile } = this.props;

    const loader = <div className='loader loader--white loader--small' />;

    const guest = (
      <div>
        <div className='sidebar-menu'>
          <div className='sidebar-menu__heading'>Actions</div>
          <ul className='sidebar-menu__list'>
            <li className='sidebar-menu__item'>
              <Link to="/"><span className='typcn typcn-messages' />Read the discussion</Link>
            </li>
          </ul>
        </div>
        <div className='sidebar-menu'>
          <div className='sidebar-menu__heading'>Log in</div>
          <form className='login-form' onSubmit={this.login}>
            <input className='login-form__email' type="text" placeholder="Email" ref={input => this.emailInput = input} />
            <input className='login-form__password' type="password" placeholder="Password" ref={input => this.passwordInput = input} />
            <button className='login-form__button' type="submit">Login</button>
          </form>
        </div>
      </div>
    );

    const admin = (
      <div className='sidebar-menu'>
        <div className='sidebar-menu__heading'>Actions</div>
        <ul className='sidebar-menu__list'>
          <li className='sidebar-menu__item'>
            <Link to="/"><span className='typcn typcn-messages' />Discuss</Link>
          </li>
          <li className='sidebar-menu__item'>
            <Link to="/schedule"><span className='typcn typcn-calendar' />Schedule</Link>
          </li>
          <li className='sidebar-menu__item'>
            <a href="#" onClick={this.logout}><span className='typcn typcn-eject' />Log out</a>
          </li>
        </ul>
      </div>
    );

    const member = (
      <div className='sidebar-menu'>
        <div className='sidebar-menu__heading'>Actions</div>
        <ul className='sidebar-menu__list'>
          <li className='sidebar-menu__item'>
            <Link to="/"><span className='typcn typcn-messages' />Discuss</Link>
          </li>
          <li className='sidebar-menu__item'>
            <a href="#" onClick={this.logout}><span className='typcn typcn-eject' />Log out</a>
          </li>
        </ul>
      </div>
    );

    if (!isLoaded(auth))
      return loader;
    else if (!auth) // not logged in
      return guest;
    else if (!isLoaded(profile) || isEmpty(profile))
      return loader;
    else if (profile.role === 'admin')
      return admin;
    else if (profile.role === 'member')
      return member;
    else// unknown role?
      return (<p>Who is this?</p>);
  }
}

const wrappedLogin = firebaseConnect()(Login);

export default connect(
  ({ firebase }) => ({
    auth: pathToJS(firebase, 'auth'),
    profile: pathToJS(firebase, 'profile')
  }), dispatch => ({
    dispatchIsLoadingSidebar: (value) => dispatch(isLoadingSidebar(value))
  })
)(wrappedLogin);
