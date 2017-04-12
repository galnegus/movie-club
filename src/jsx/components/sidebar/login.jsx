import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { firebaseConnect, pathToJS, isLoaded, isEmpty } from 'react-redux-firebase'
import { doneLoadingSidebar } from '../../actions';

class Login extends Component{
  constructor(props) {
    super(props);


    this.login = this.login.bind(this);
    this.setEmailRef = this.setEmailRef.bind(this);
    this.setPasswordRef = this.setPasswordRef.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // change the store to reflect that the initial loading of the profile is done
    const { auth, profile, dispatchDoneLoadingSidebar } = nextProps;
    if (isLoaded(auth) && ((!isEmpty(auth) && isLoaded(profile)) || isEmpty(auth))) {
      dispatchDoneLoadingSidebar();
    }
  }

  login(e) {
    e.preventDefault();

    this.props.firebase.login({
      email: this.emailInput.value,
      password: this.passwordInput.value
    });
  }

  // after logging out we have to reload the page because logging out causes all of the existing firebase data in the store to be removed (for some reason),
  // this appears to be a bug with the react-redux-firebase plugin, so our quick fix is to just reload the page!
  // see: https://github.com/prescottprue/react-redux-firebase/issues/93
  logout(e) {
    e.preventDefault();
    this.props.firebase.logout();
    window.location.reload(false);
  }

  setEmailRef(input) {
    this.emailInput = input;
  }

  setPasswordRef(input) {
    this.passwordInput = input;
  }

  render(){
    const { auth, profile } = this.props;

    if (!isLoaded(auth)) {
      return (
        <p>LOADING AUTH</p>
      );
    }

    if (!auth) { // not logged in
      return(
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
              <input className='login-form__email' type="text" placeholder="Email" ref={this.setEmailRef} />
              <input className='login-form__password' type="password" placeholder="Password" ref={this.setPasswordRef} />
              <button className='login-form__button' type="submit">Login</button>
            </form>
          </div>
        </div>
      );
    } else { // logged in
      if (!isLoaded(profile) || isEmpty(profile)) return (<p>LOADING PROFILE</p>); // make this look prettier

      if (profile.role === 'admin') {
        return(
          <div className='sidebar-menu'>
            <div className='sidebar-menu__heading'>Actions</div>
            <ul className='sidebar-menu__list'>
              <li className='sidebar-menu__item'>
                <Link to="/"><span className='typcn typcn-messages' />Discuss</Link>
              </li>
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
                <Link to="/"><span className='typcn typcn-messages' />Discuss</Link>
              </li>
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
export default connect(
  ({ firebase }) => ({
    auth: pathToJS(firebase, 'auth'),
    profile: pathToJS(firebase, 'profile')
  }), dispatch => ({
    dispatchDoneLoadingSidebar: () => dispatch(doneLoadingSidebar())
  })
)(wrappedLogin);
