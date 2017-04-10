import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Login extends Component{
  render(){
    if(!this.props.user){
      return(
        <div className='sidebar-menu'>
          <strong className='sidebar-menu__heading'>Login</strong>
          <ul className='sidebar-menu__list'>
            <li className='sidebar-menu__item'><Link to="/">Home</Link></li>
            <li className='sidebar-menu__item'><input type="text" placeholder="username"></input></li>
            <li className='sidebar-menu__item'><input type="text" placeholder="password"></input></li>
            <li className='sidebar-menu__item'><button type="submit">Login</button></li>
          </ul>
          <hr />
        </div>
      );
    } else if(this.props.user === "admin") {
      return(
        <div className='sidebar-menu'>
          <strong className='sidebar-menu__heading'>Cool Guy</strong>
          <ul className='sidebar-menu__list'>
            <li className='sidebar-menu__item'><Link to="/">Home</Link></li>
            <li className='sidebar-menu__item'><Link to="/addmovie">Add movie</Link></li>
            <li className='sidebar-menu__item'><Link to="/schedule">Schedule</Link></li>
            <li className='sidebar-menu__item'>Logout</li>
          </ul>
          <hr />
        </div>
      );
    } else if(this.props.user === "member") {
      return(
        <div className='sidebar-menu'>
          <strong className='sidebar-menu__heading'>Cool Guy</strong>
          <ul className='sidebar-menu__list'>
            <li className='sidebar-menu__item'><Link to="/">Home</Link></li>
            <li className='sidebar-menu__item'>Logout</li>
          </ul>
          <hr />
        </div>
      );
    }
  }
}