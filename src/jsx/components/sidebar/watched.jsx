import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Watched extends Component{
  render(){
    return(
      <div className='sidebar-menu'>
        <div className='sidebar-menu__heading'>Watched movies</div>
        <ul className='sidebar-menu__list'>
          <li className='sidebar-menu__item'>
            <a href='#'>
              <div className='sidebar-movie'>
                <div className='sidebar-movie__image-container'>
                  <img src='http://image.tmdb.org/t/p/w342/ChTLC17F4nIjA7jP4F6QX9A8FJ.jpg' />
                </div>
                <div className='sidebar-movie__info'>
                  <div className='sidebar-movie__title'>Ginger Snaps</div>
                  <div className='sidebar-movie__week'>Week XX</div>
                </div>
              </div>
            </a>
          </li>
          <li className='sidebar-menu__item'>
            <a href='#'>
              <div className='sidebar-movie'>
                <div className='sidebar-movie__image-container'>
                  <img src='http://image.tmdb.org/t/p/w342/ChTLC17F4nIjA7jP4F6QX9A8FJ.jpg' />
                </div>
                <div className='sidebar-movie__info'>
                  <div className='sidebar-movie__title'>Ginger Snaps</div>
                  <div className='sidebar-movie__week'>Week XX</div>
                </div>
              </div>
            </a>
          </li>
          <li className='sidebar-menu__item'>
            <a href='#'>
              <div className='sidebar-movie'>
                <span className='typcn typcn-film sidebar-movie__icon' />
                <div className='sidebar-movie__info'>
                  <div className='sidebar-movie__title'>Ginger Snaps</div>
                  <div className='sidebar-movie__week'>Week YY</div>
                </div>
              </div>
            </a>
          </li>
          <li className='sidebar-menu__item'>
            <a href='#'>
              <div className='sidebar-movie'>
                <span className='typcn typcn-film sidebar-movie__icon' />
                <div className='sidebar-movie__info'>
                  <div className='sidebar-movie__title'>Ginger Snaps</div>
                  <div className='sidebar-movie__week'>Week YY</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}