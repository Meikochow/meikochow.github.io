import React, { Component } from 'react';
import './LightbulbButton.scss';

class LightbulbButton extends Component {

  render() {
    const { darkMode, callback } = this.props;
    return (
      <div className="LightbulbButton-container">
        <button className={`LightbulbButton ${darkMode ? "lightContainer" : "darkContainer"}`} onClick={callback}>
          <img src="./assets/icons/lightbulb.svg" alt="Lightbulb button" className={`lightBulvSvg ${darkMode ? "light" : "dark"}`} />
          <div className="lighbulb-string" />
        </button>

      </div>
    );
  }
}

export default LightbulbButton;
