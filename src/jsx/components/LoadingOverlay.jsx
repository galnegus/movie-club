import React, {Component} from 'react';

export default class LoadingOverlay extends Component {

  render() {
    return (
      <div className='loading-overlay'>
        <div className='loading-overlay__loader loader loader--white' />
        <p className='loading-overlay__text'>Loading</p>
      </div>
    );
  }
}