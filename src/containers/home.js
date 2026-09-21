import React, { Component } from 'react';
import '../scss/home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="myImageContainer">
              <img src="./assets/whoAmI/profile pic.jpg" className="myImage" alt="This is me"/>
        </div>
        <div className="textContainer">
          <span className="textBlock greeting">Hi, I'm <span className="name">Victor</span></span>
          <span className="textBlock fullStackDev">I write code and build things</span>
          <span className="textBlock graduate">FreeCodeCamp Graduate and Bachelor in Molecular Biology</span>
          <span className="textBlock loveIt">I like Nature, Art and Burgers.</span>
        </div>
      </div>
    );
  }
}

export default Home;
