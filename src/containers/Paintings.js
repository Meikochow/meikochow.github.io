import React, { Component, useRef } from 'react';
import './Paintings.scss';
import { Carousel, Icon } from 'antd';
import 'antd/dist/antd.css';
import paintingsList from './paintingsList';

class Paintings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.slider = React.createRef(null);
  }

render() {
  return (

    <div className="Paintings-container">
      <Carousel ref={this.slider}>
      {paintingsList.acryl_on_canvas.map((res, i) => {
            return (
              <div key={`${res.resprojectName} - ${i}`} className="painting-wrapper">
                  <img
                    src={res.projectThumbNailLink}
                    alt={res.projectDescription}
                    className="painting-img"
                  />
              </div>
            );
          })}

      </Carousel>
      <button onClick={() => this.slider.current.prev()} className='left-button'><Icon type="left" /></button>
      <button onClick={() => this.slider.current.next()} className='right-button'><Icon type="right" /></button>
    </div>
  );
}
}

export default Paintings;
