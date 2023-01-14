import React, { Component } from 'react';
import './Paintings.scss';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import paintingsList from './paintingsList';

class Paintings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      painting: {
        image: '',
        title: '',
        description: '',
        tech: ''
      },
      fullScreenImage: false
    }
  }
  openCertificate = (certObj) => {
    this.setState({
      painting: certObj,
      fullScreenImage: true
    })
  }
  closeCertificate = () => {
    this.setState({
      fullScreenImage: false
    })
  }

  render() {
    const {
      painting,
      fullScreenImage
    } = this.state;
    return (

      <div className="Paintings-container">
        <Modal
          visible={fullScreenImage}
          centered
          onCancel={this.closeCertificate}
          footer={false}
          className="painting-modal-container"
        >
          <div className="modal-body">
            <div className="painting-info_container">
              <div className="title">
                {painting.title}
              </div>
              <div className="tech">
                {/* {painting.tech} */}
              </div>
            </div>
            <img
              src={painting.image}
              alt={painting.title}
              className='modal-image'
            />
          </div>
        </Modal>
        <div className="painting-container">
          {paintingsList.acryl_on_canvas.map(res => {
            return (
              <div key={res.resprojectName} className="painting-wrapper">
                <div className="painting">
                  <img
                    src={res.projectThumbNailLink}
                    alt={res.projectDescription}
                    className="painting-img"
                    onClick={
                      () => this.openCertificate({
                        image: res.projectThumbNailLink,
                        title: res.projectName,
                        description: res.projectDescription,
                        tech: res.projectTech
                      })
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Paintings;
