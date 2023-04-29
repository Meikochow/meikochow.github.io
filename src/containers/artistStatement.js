import React, { Component } from 'react';
import '../scss/artistStatement.scss';

class ArtistStatement extends Component {
  render() {
    return (
      <div className="artistStatement">
        <div className='as1'>Artist statement</div>
        <br/>
        <div className='as2'>I paint the human psyche.</div>
        <div className='as3'>Tranquility, trepidation, triumphance and loss permeate my work.</div>
        <div className='as4'> The beings I paint are caught in a cathartic moment in time, with their wounds and hopes exposed, earning for bliss.</div>
      </div>
    );
  }
}

export default ArtistStatement;
