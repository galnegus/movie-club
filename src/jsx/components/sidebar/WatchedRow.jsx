import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export default class WatchedRow extends Component {
  render() {
    const { yearWeek, title, poster_path } = this.props;
    const imgSrc = 'http://image.tmdb.org/t/p/w92' + poster_path;

    return (
      <li className='sidebar-menu__item'>
        <Link to={'/discussion/' + yearWeek}>
          <div className='sidebar-movie'>
            <div className='sidebar-movie__image-container'>
              <img src={imgSrc} />
            </div>
            <div className='sidebar-movie__info'>
              <div className='sidebar-movie__title'>{title}</div>
              <div className='sidebar-movie__week'>Week {parseInt(yearWeek.substring(5))}</div>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}
