import React, { Component } from 'react';
import '../scss/certifications.scss';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
class Certifications extends Component {
  constructor(props){
    super(props);
    this.state={
      certificate:{
        image:'',
        link:''
      },
      enlargedCertificateVisible: false
    }
    this.openCertificate = this.openCertificate.bind(this);
    this.closeCertificate = this.closeCertificate.bind(this);
  }
  openCertificate(certObj){
    this.setState({
      certificate:certObj,
      enlargedCertificateVisible:true
    })
  }
  closeCertificate(){
    this.setState({
      enlargedCertificateVisible:false
    })
  }
  render() {
    return (
      <div className="Certifications">
      <div className="aboutfcc"><a className="fccName" href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a> is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, Medium publications and local organizations that intend to make learning web development accessible to anyone. Beginning with tutorials that introduce students to HTML, CSS and JavaScript, students progress to project assignments that they must complete either alone or in pairs.<br/>Find out more at <a className="fccName" href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">www.freecodecamp.org</a>  </div>
      <Modal
          visible={this.state.enlargedCertificateVisible}
          centered
          onCancel = {this.closeCertificate}
          footer={false}
        >
              <img src={this.state.certificate.image} alt="legacy Certification" className="enlargedCertificate" />
              <a href={this.state.certificate.link} className="verifyCertificate" target="_blank" rel="noopener noreferrer">Verify</a>
        </Modal>
      <img src="./assets/certifications/Legacy Front End Certification.png" alt="legacy Certification" className="certificate"
        onClick={
          () => this.openCertificate({
            image:'./assets/certifications/Legacy Front End Certification.png',
            link:'https://www.freecodecamp.org/certification/meikochow/legacy-front-end'})
          }
       />
      <img src="./assets/certifications/Responsive Web Design Certification.png" alt="legacy Certification" className="certificate"
       onClick={
         () => this.openCertificate({
           image:'./assets/certifications/Responsive Web Design Certification.png',
           link:'https://www.freecodecamp.org/certification/meikochow/responsive-web-design'})}
       />
      <img src="./assets/certifications/JavaScript Algorithms and Data Structures Certification.png" alt="legacy Certification" className="certificate"
        onClick={
          () => this.openCertificate({
            image:'./assets/certifications/JavaScript Algorithms and Data Structures Certification.png',
            link:'https://www.freecodecamp.org/certification/meikochow/javascript-algorithms-and-data-structures'})}
      />
      <img src="./assets/certifications/3-Data Visualization Certification.png" alt="legacy Certification" className="certificate"
        onClick={
          () => this.openCertificate({
            image:'./assets/certifications/3-Data Visualization Certification.png',
            link:'https://www.freecodecamp.org/certification/meikochow/data-visualization'})}
      />
      <img src="./assets/certifications/Front End Libraries Certification.png" alt="legacy Certification" className="certificate"
        onClick={
          () => this.openCertificate({
            image:'./assets/certifications/Front End Libraries Certification.png',
            link:'https://www.freecodecamp.org/certification/meikochow/front-end-libraries'})}
      />
      <img src="./assets/certifications/5-Apis and Microservices Certification.png" alt="legacy Certification" className="certificate"
        onClick={
          () => this.openCertificate({
            image:'./assets/certifications/5-Apis and Microservices Certification.png',
            link:'https://www.freecodecamp.org/certification/meikochow/apis-and-microservices'})}
      />
      <img src="./assets/certifications/Info security and Quality assurance Certificate.png" alt="legacy Certification" className="certificate"
        onClick={
          () => this.openCertificate({
            image:'./assets/certifications/Info security and Quality assurance Certificate.png',
            link:'https://www.freecodecamp.org/certification/meikochow/information-security-and-quality-assurance'})}
      />
      <img src="./assets/certifications/7-Full Stack Certification.png" alt="legacy Certification" className="certificate"
      onClick={
        () => this.openCertificate({
          image:'./assets/certifications/7-Full Stack Certification.png',
          link:'https://www.freecodecamp.org/certification/meikochow/full-stack'})}
      />
      </div>
    );
  }
}

export default Certifications;
