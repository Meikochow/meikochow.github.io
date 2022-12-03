import React, { Component } from 'react';
import '../scss/projects.scss';
import ProjectCard from './Card'
import projectList from './projectList';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false
    }
    this.detectMobile = this.detectMobile.bind(this);
  }
  componentDidMount() {
    this.detectMobile();
  }
  detectMobile() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      this.setState({
        mobile: true
      })
    }
    else {
      return;
    }
  }
  render() {
    return (
      <div className="Projects-container">
        <div className="Projects">
          {/* 
          Unfortunately all of these are dead on the BE
          {projectList.fullStack.map(v =>
            <ProjectCard
              key={Math.floor(Math.random() * 452362)}
              imageLink={v.projectThumbNailLink}
              title={v.projectName}
              description={v.projectDescription}
              source={v.projectHref}
              alt={v.projectName}
              specs={v.projectTech}
              code={v.code}
              codeLink={v.codeLink}
              isMobile={this.state.mobile}
            />)} */}
        
        {projectList.react.map(v =>
          <ProjectCard
            key={Math.floor(Math.random() * 452572)}
            imageLink={v.projectThumbNailLink}
            title={v.projectName}
            description={v.projectDescription}
            source={v.projectHref}
            alt={v.projectName}
            specs={v.projectTech}
            code={v.code}
            codeLink={v.codeLink}
            isMobile={this.state.mobile}
          />)}
        {projectList.javascript.map(v =>
          <ProjectCard
            key={Math.floor(Math.random() * 4506592)}
            imageLink={v.projectThumbNailLink}
            title={v.projectName}
            description={v.projectDescription}
            source={v.projectHref}
            alt={v.projectName}
            specs={v.projectTech}
            code={v.code}
            codeLink={v.codeLink}
            isMobile={this.state.mobile}
          />)}
        {projectList.D3.map(v =>
          <ProjectCard
            key={Math.floor(Math.random() * 45236565672)}
            imageLink={v.projectThumbNailLink}
            title={v.projectName}
            description={v.projectDescription}
            source={v.projectHref}
            alt={v.projectName}
            specs={v.projectTech}
            code={v.code}
            codeLink={v.codeLink}
            isMobile={this.state.mobile}
          />)}
        {projectList.games.map(v =>
          <ProjectCard
            key={Math.floor(Math.random() * 4525673692)}
            imageLink={v.projectThumbNailLink}
            title={v.projectName}
            description={v.projectDescription}
            source={v.projectHref}
            alt={v.projectName}
            specs={v.projectTech}
            code={v.code}
            codeLink={v.codeLink}
            isMobile={this.state.mobile}
          />)}
      </div>
    </div>
    );
  }
}

export default Projects;
