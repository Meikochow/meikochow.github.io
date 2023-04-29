import React, { Component } from 'react';
import '../scss/App.scss';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

import Home from '../containers/home';
import Projects from '../containers/projects';
import Certifications from '../containers/certifications';
import ContactMe from '../containers/ContactMe';
import Paintings from '../containers/Paintings';
import LightbulbButton from '../containers/LightbulbButton';
import ArtistStatement from '../containers/artistStatement';

const TabPane = Tabs.TabPane;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: {
        1: true,
        2: false,
        3: false,
        4: false,
        5: false
      },
      darkMode: true,
      ui: ''
    }
  }
  componentDidMount() {
    document.getElementById("loading").style.display = "none";
  }
  callback = (key) => {
    let components = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    }
    components[key] = true;
    this.setState({
      components: components
    })
  }

  handleModeView = (view) => {
    if (view === 'art') {
      this.setState({
        brushButtonClass: 'grow',
        brushButtonIconClass: 'sway',
        codeButtonClass: 'hide',
        dividerClass: 'fade-out'
      }, () => {
        setTimeout(() => {
          this.setState({
            ui: view,
            brushButtonClass: '',
            brushButtonIconClass: '',
            codeButtonClass: ''
          })
        }, 2990)
      })

    } else {
      this.setState({
        codeButtonClass: 'grow',
        codeButtonIconClass: 'shake',
        brushButtonClass: 'hide',
        greetContainerClass: 'align-rigth',
        dividerClass: 'fade-out'

      }, () => {
        setTimeout(() => {
          this.setState({
            ui: view,
            codeButtonClass: '',
            codeButtonIconClass: '',
            brushButtonClass: '',
            greetContainerClass: ''
          })
        }, 2990)
      })
    }
  }

  render() {
    const {
      components,
      darkMode,
      ui,
      brushButtonClass,
      codeButtonClass,
      brushButtonIconClass,
      codeButtonIconClass,
      greetContainerClass,
      dividerClass
    } = this.state;

    if (ui === '') {
      return (
        <div className={`greet-prompt_wrapper ${greetContainerClass}`}>
          <button
            onClick={() => this.handleModeView('art')}
            className={`greet-button ${brushButtonClass}`}
          >
            <div className='button-contents '>
              <img
                src='./assets/icons/paintbrush.svg'
                className={`icon brush-icon ${brushButtonIconClass}`}
                alt="Paintings" />
            </div>

          </button>
          <div className={`divider ${dividerClass}`} />
          <button
            onClick={() => this.handleModeView('code')}
            className={`greet-button ${codeButtonClass}`}
          >
            <div className='button-contents'>
              <img
                src='./assets/icons/dossier2.svg'
                className={`icon brush-icon ${codeButtonIconClass}`}
                alt="Projects"
              />
            </div>
          </button>
        </div>
      )
    } else if (ui === 'code') {
      return (
        <div className={`App ${darkMode ? 'DarkApp' : ''}`}>
          <Tabs defaultActiveKey="1" onChange={this.callback} size="large" >
            <TabPane tab={<img src='./assets/icons/aboutMe.png' className="icon aboutMeIcon" alt="About me" />} key="1" className="tabPane">{components[1] && <Home />}</TabPane>
            <TabPane tab={<img src='./assets/icons/dossier2.svg' className="icon" alt="Projects" />} key="3" className="tabPane">{components[3] && <Projects />}</TabPane>
            <TabPane tab={<img src='./assets/icons/certificate.svg' className="icon" alt="Accreditations" />} key="4" className="tabPane">{components[4] && <Certifications />}</TabPane>
            <TabPane tab={<img src='./assets/icons/envelope.svg' className="icon letter-icon" alt="Contact me" />} key="5" className="tabPane">{components[5] && <ContactMe />}</TabPane>
          </Tabs>
          <footer>Built with <img src="./assets/icons/reactLogo.png" className="footerImage" alt="react" title="React" /> and <img src="./assets/icons/ant.png" className="footerImage" alt="ant-design" title="Ant-Design" /> by Victor Cojocaru 2019 - {new Date().getFullYear()}.</footer>
          <LightbulbButton darkMode={darkMode} callback={() => this.setState({ darkMode: !darkMode })} />

        </div>
      );
    } else {
      return (
        <div className={`App DarkApp`}>
        <Tabs defaultActiveKey="1" onChange={this.callback} size="large" >
            <TabPane tab={<img src='./assets/icons/aboutMe.png' className="icon aboutMeIcon" alt="About me" />} key="1" className="tabPane">{components[1] && <ArtistStatement />}</TabPane>
            <TabPane tab={<img src='./assets/icons/paintbrush.svg' className="icon brush-icon" alt="Paintings" />} key="2" className="tabPane">{components[2] && <Paintings />}</TabPane>
          </Tabs>
          <footer>Built with <img src="./assets/icons/reactLogo.png" className="footerImage" alt="react" title="React" /> and <img src="./assets/icons/ant.png" className="footerImage" alt="ant-design" title="Ant-Design" /> by Victor Cojocaru 2019 - {new Date().getFullYear()}.</footer>
        </div>
      )

    }


  }
}

export default App;
