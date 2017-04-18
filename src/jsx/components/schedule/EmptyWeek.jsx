import React, {Component} from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';

export default class EmptyWeek extends Component{
  render(){
    return(
      <li className='schedule-list__item schedule-list__item--empty'>
        <div className='schedule-list__year-week'>
          <div>
            <span className='schedule-list__week'>{'Week ' + parseInt(this.props.year_week.substring(5))}</span>
            <br />
            <span className='schedule-list__year'>{parseInt(this.props.year_week.substring(0,4)) }</span>
          </div>
        </div>
        <Link to={'/add-movie/' + this.props.year_week} className='schedule-list__content'>
          <div className='schedule-list__info'>
            <span className='typcn typcn-plus' />
          </div>
        </Link>
      </li>
    );
  }
}
