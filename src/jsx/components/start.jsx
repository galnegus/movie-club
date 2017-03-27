import React, {Component} from 'react';
import {Sidebar} from './sidebar.jsx';
import {Discussion} from './discussion.jsx';

export class Start extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Discussion />
      </div>
    );
  }
}