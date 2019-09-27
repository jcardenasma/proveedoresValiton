import React, { Component } from 'react';

import './styles/MiniLoader.css';

export default class MiniLoader extends Component {
  render() {
    return (
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    );
  }
}