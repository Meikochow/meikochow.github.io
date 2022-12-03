import React, { Component } from 'react';
import '../scss/ContactMe.scss';
import 'antd/dist/antd.css';
import { Icon } from 'antd';

class ContactMe extends Component {
  redirect = (link) => {
    window.open(link)
  }
  render() {
    return (
      <div className="ContactMe">
        <div className="message">
        <div className="textLine textLine1"><Icon type="code" />Need a Developer?</div>
        <div className="textLine textLine2"><Icon type="desktop" className="monitor"/> Want help with a project?</div>
        <div className="textLine textLine3"><div className="terarium"><img src="./assets/icons/bug.png" className="bug" alt="insect"/></div>Curious about the exciting world of hexapods?</div>
        <div className="textLine textLine4"><Icon type="user" />Find me on any of these platforms</div>
        </div>
        <div className="mediaContainer">
          <img src="./assets/icons/linkedin.png" className="ContactIcon" alt="linkedin" onClick={() => this.redirect('https://www.linkedin.com/in/victor-cojocaru-97015bb3/')} title="LinkedIn"/>
          <img src="./assets/icons/codePen.png" className="ContactIcon codePen-icon" alt="CodePen" onClick={() => this.redirect('https://codepen.io/Meikochow/')} title="CodePen"/>
          <img src="./assets/icons/github.png" className="ContactIcon github-icon" alt="github" onClick={() => this.redirect('https://github.com/Meikochow')} title="GitHub"/>
          <img src="./assets/icons/twitter.png" className="ContactIcon" alt="twitter" onClick={() => this.redirect('https://twitter.com/Victor01684891?lang=en')} title="Twitter"/>
          <img src="./assets/icons/fcc.png" className="ContactIcon" alt="freecodecamp" onClick={() => this.redirect('https://www.freecodecamp.org/meikochow')} title="Free Code Camp"/>
        </div>
      </div>
    );
  }
}

export default ContactMe;
