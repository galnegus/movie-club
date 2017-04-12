import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class WatchedRow extends Component {
  render() {
    const img_src = "http://image.tmdb.org/t/p/w92" + this.props.poster_path;
    return(
        <li className='sidebar-menu__item'>
            <a href='#'>
                <div className='sidebar-movie'>
                    <div className='sidebar-movie__image-container'>
                        <img src={img_src} />
                    </div>
                    <div className='sidebar-movie__info'>
                        <div className='sidebar-movie__title'>{this.props.title}</div>
                        <div className='sidebar-movie__week'>Week {this.props.year_week.substring(5)}</div>
                    </div>
                </div>
            </a>
        </li>
    );
  }
}
