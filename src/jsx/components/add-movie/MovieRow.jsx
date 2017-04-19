import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { firebaseConnect, dataToJS } from 'react-redux-firebase'
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Notifications from 'react-notification-system-redux';

class MovieRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdded: false
    };

    this.addToFirebase = this.addToFirebase.bind(this);
  }

  // the datestring from themoviedb's api is formatted like YYYY-MM-DD and we only want YYYY.
  datestring2year(datestring) {
    return datestring.slice(0, 4);
  }

  addToFirebase(e) {
    e.preventDefault();

    const { id, yearWeek, firebase, notify, notifyError } = this.props;

    // assume that the week will be stored in firebase a string, make it sortable in string format!
    // const current_year_week = moment().format('YYYY-ww'); // YYYY = 1970 1971 ... 2029 2030, ww = 01 02 ... 52 53
    axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/' + id,
      params:{
        api_key: 'a4eb585b085da1972100342a6d21c935',
        append_to_response: 'credits'
      }
    }).then(response => {
      const { api_data } = response;
      const movieObj = {year_week: yearWeek, api_data: response.data}; //, year: current_year, week: current_week};
      firebase.push('/movies', movieObj).then(() => {
        this.setState({ isAdded: true });
        notify({
          title: 'Added',
          message: movieObj.api_data.title + ' has been added to the schedule!',
          position: 'bc',
          dismissible: false,
          autoDismiss: 3
        });
      }).catch(() => {
        notifyError({
          title: 'Error',
          message: title + ' could not be added because of a connection error.',
          position: 'bc',
          dismissible: false,
          autoDismiss: 3
        });
      });
    });
  }

  render() {
    // redirect us back to the schedule after adding a movie
    if (this.state.isAdded)
      return (<Redirect to='/redirect' />);

    const { poster_path, id, alreadyAdded, title, release_date, overview } = this.props;

    // see https://developers.themoviedb.org/3/search/search-movies (response schema.results) to see what props are available
    const posterSrc = "http://image.tmdb.org/t/p/w92" + poster_path;
    let addButton;
    let classModifier = '';
    if (alreadyAdded) {
      addButton = <span className='typcn typcn-tick add-movie-results__tick' />
      classModifier = 'add-movie-results__item--added'
    } else {
      addButton = (
        <a href='#' className='add-movie-results__button' onClick={this.addToFirebase}>
          <span className='typcn typcn-plus' />
        </a>
      );
    }

    return(
      <li className={'add-movie-results__item ' + classModifier}>
        {!poster_path ? '' : (<img className='add-movie-results__image' src={posterSrc} />)}
        <div className='add-movie-results__block'>
          <div className='add-movie-results__info'>
            <strong className='add-movie-results__title'>{title + ' (' + this.datestring2year(release_date) + ')'}</strong>
            <p className='add-movie-results__text'>{overview}</p>
          </div>
          {addButton}
        </div>
      </li>
    );
  }
}

const wrappedMovieRow = firebaseConnect()(MovieRow);

export default connect(null, dispatch => ({
  notify: options => dispatch(Notifications.info(options)),
  notifyError: options => dispatch(Notifications.error(options))
}))(wrappedMovieRow);
