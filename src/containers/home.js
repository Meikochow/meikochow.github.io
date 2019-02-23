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
          <span className="textBlock greeting">Hey, I'm <span className="name">Victor</span></span>
          <span className="textBlock fullStackDev">Full Stack Developer</span>
          <span className="textBlock whoIAm"><span className="passion">My_Passion</span> = Building_Apps <span className="noto">&&</span> Solving_Algorithms</span>
          <span className="textBlock graduate">FreeCodeCamp Graduate and Bachelor in Molecular Biology</span>
          <span className="textBlock loveIt">I like <span className="mountains">Mountains</span>, Winter and Insects.</span>
        </div>
      </div>
    );
  }
}

export default Home;
