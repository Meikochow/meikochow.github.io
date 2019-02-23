import React, { Component } from 'react';
import '../scss/App.scss';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

import Home from '../containers/home';
import Projects from '../containers/projects';
import Certifications from '../containers/certifications';
import ContactMe from '../containers/ContactMe';

const TabPane = Tabs.TabPane;

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      components:{
        1:true,
        2:false,
        3:false,
        4:false
      }
    }
  }
  componentDidMount() {
    document.getElementById("loading").style.display="none";
  }
  callback  = (key) => {
    let components ={
      1:false,
      2:false,
      3:false,
      4:false
    }
    components[key] = true;
    this.setState({
      components: components
    })
  }

  render() {
    let home = this.state.components[1] ? <Home/> : null;
    let projects= this.state.components[2] ? <Projects/> : null;
    let certifications= this.state.components[3] ? <Certifications/> : null;
    let contact= this.state.components[4] ? <ContactMe /> : null;
    return (
      <div className="App">
        <Tabs defaultActiveKey="1" onChange={this.callback} >
          <TabPane tab={<img src='./assets/icons/aboutMe.png' className="icon aboutMeIcon" alt="Menu Item" />} key="1" className="tabPane">{home}</TabPane>
          <TabPane tab={<img src='./assets/icons/portfolio.png' className="icon" alt="Menu Item"/>} key="2" className="tabPane">{projects}</TabPane>
          <TabPane tab={<img src='./assets/icons/certificateBlack.png' className="icon" alt="Menu Item"/>} key="3"className="tabPane">{certifications}</TabPane>
          <TabPane tab={<img src='./assets/icons/contactBlack.png' className="icon" alt="Menu Item"/>} key="4" className="tabPane">{contact}</TabPane>
        </Tabs>
        <footer>Built with <img src="./assets/icons/reactLogo.png" className="footerImage" alt="react" title="React"/> and <img src="./assets/icons/ant.png" className="footerImage" alt="ant-design" title="Ant-Design"/> by Victor Cojocaru 2019</footer>
      </div>
    );
  }
}

export default App;
