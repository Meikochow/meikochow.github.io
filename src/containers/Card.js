import React, { Component } from 'react';
import '../scss/Card.scss';
import 'antd/dist/antd.css';
import { Icon } from 'antd';

class ProjectCard extends Component {
  redirect = () => {
    window.open(this.props.source)
  }
  render() {
    let displayFingerprint = this.props.isMobile ? "tapToSeeDetails" : "displayNone";
    let code = this.props.code === "github" ? <Icon type="github" /> : <Icon type="codepen-circle" />;
    return (
      <div className="projectCard">
        <img src={this.props.imageLink} alt={this.props.alt} className="projectImage"/>
        <div className="textAndLinksContainer">
          <div className="description">
            <div className="text">{this.props.description}</div>
            <div className="specs">{this.props.specs}</div>
          </div>
          <div className="linksContainer">
            <div className="codeIcon" title="See Code"><a href={this.props.codeLink} target="_blank" rel="noopener noreferrer">{code}</a></div>
            <div className="seeLive" title="See Live"><a href={this.props.source} target="_blank" rel="noopener noreferrer" ><Icon className="Icon" type="play-circle" theme="filled" /></a></div>
          </div>
        </div>
        <div className={displayFingerprint}>
          <img src="./assets/icons/thumb.png" className="fingerprint" alt="fingerprint"/>
          <div className="tapToSeeDetailsText">Tap for details</div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
