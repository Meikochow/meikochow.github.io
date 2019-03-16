import React, { Component } from 'react';
import '../scss/projects.scss';
import ProjectCard from './Card'
import projectList from './projectList';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state={
      collapsed:'left',
      mobile:false
    }
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.detectmob = this.detectmob.bind(this);
  }
  componentDidMount() {
  this.handleWindowResize();
  window.addEventListener('resize', this.handleWindowResize);
  this.detectmob();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);

  }
  handleWindowResize(){
    if(window.innerWidth <= 800) {
      if(this.state.collapsed === "left"){
        this.setState({
          collapsed:'top'
        })
      } else {
        return;
      }
    } else {
      if(this.state.collapsed === "top"){
        this.setState({
          collapsed:'left'
        })
      } else {
        return;
      }
    }
  }
  detectmob() {
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
      this.setState({
        mobile:true
      })
    }
    else {
      return;
    }
  }
  render() {
    return (
      <Tabs
                defaultActiveKey="1"
                tabPosition={this.state.collapsed}
                style={{ "height":"100%" }}
                className="sidetab"
              >
                <TabPane tab="FullStack" key="1">
                  <div className="Projects">
                  {projectList.fullStack.map(v =>
                    <ProjectCard
                    key={Math.floor(Math.random() * 452362)}
                    imageLink={v.projectThumbNailLink}
                    title={v.projectName}
                    description = {v.projectDescription}
                    source={v.projectHref}
                    alt={v.projectName}
                    specs={v.projectTech}
                    code={v.code}
                    codeLink={v.codeLink}
                    isMobile = {this.state.mobile}
                    />)}
                  </div>
                </TabPane>
                <TabPane tab="React" key="2">
                <div className="Projects">
                  {projectList.react.map(v =>
                    <ProjectCard
                    key={Math.floor(Math.random() * 452572)}
                    imageLink={v.projectThumbNailLink}
                    title={v.projectName}
                    description = {v.projectDescription}
                    source={v.projectHref}
                    alt={v.projectName}
                    specs={v.projectTech}
                    code={v.code}
                    codeLink={v.codeLink}
                    isMobile = {this.state.mobile}
                    />)}
                  </div>
                </TabPane>
                <TabPane tab="Javascript" key="3">
                  <div className="Projects">
                  {projectList.javascript.map(v =>
                    <ProjectCard
                    key={Math.floor(Math.random() * 4506592)}
                    imageLink={v.projectThumbNailLink}
                    title={v.projectName}
                    description = {v.projectDescription}
                    source={v.projectHref}
                    alt={v.projectName}
                    specs={v.projectTech}
                    code={v.code}
                    codeLink={v.codeLink}
                    isMobile = {this.state.mobile}
                    />)}
                  </div>
                </TabPane>
                <TabPane tab="D3" key="4">
                  <div className="Projects">
                  {projectList.D3.map(v =>
                    <ProjectCard
                    key={Math.floor(Math.random() * 45236565672)}
                    imageLink={v.projectThumbNailLink}
                    title={v.projectName}
                    description = {v.projectDescription}
                    source={v.projectHref}
                    alt={v.projectName}
                    specs={v.projectTech}
                    code={v.code}
                    codeLink={v.codeLink}
                    isMobile = {this.state.mobile}
                    />)}
                  </div>
                </TabPane>
                <TabPane tab="Games" key="5">
                  <div className="Projects">
                  {projectList.games.map(v =>
                    <ProjectCard
                    key={Math.floor(Math.random() * 4525673692)}
                    imageLink={v.projectThumbNailLink}
                    title={v.projectName}
                    description = {v.projectDescription}
                    source={v.projectHref}
                    alt={v.projectName}
                    specs={v.projectTech}
                    code={v.code}
                    codeLink={v.codeLink}
                    isMobile = {this.state.mobile}
                    />)}
                  </div>
                </TabPane>
              </Tabs>
    );
  }
}

export default Projects;
