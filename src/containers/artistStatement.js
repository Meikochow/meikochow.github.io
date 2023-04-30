import React, { Component } from 'react';
import '../scss/artistStatement.scss';

class ArtistStatement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#ffffff',
      count: 0,
      setDefaultColor: false,
    }
    this.timer = null;
  }
  componentDidMount(){
    this.timer = setInterval(() => this.randomHexSetState(), 100);
  }
  componentDidUpdate(prevProps){
    if(this.state.count > 30){
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    this.timer = null;
  }


  randomHexSetState = () => {
    this.setState({
      color: this.state.count === 30 ? '#ffffff' : `#${Math.random().toString(16).substr(-6)}`,
      count: this.state.count + 1
    })
  }

  render() {
    console.log(`
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣤⣄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⡿⠛⠋⠉⠉⠉⠉⠉⡿⠛⠻⠷⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠟⠉⠀⠙⣦⣀⣀⣀⣠⡤⠴⡿⣄⡀⠀⠀⠉⠻⢷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠁⠀⠀⠀⣰⠋⢧⠀⠀⠀⠀⠀⡇⠀⠉⠙⠓⠒⡶⢯⣙⣿⣆⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡟⠀⠀⠀⢀⠞⠁⠀⠈⣳⡤⠤⠴⠚⣟⠛⠒⠒⠒⣺⠳⢤⣀⣉⣻⣷⡀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡿⠶⠶⣤⣾⡁⠀⠀⢀⡜⠉⣧⣠⣤⣴⣾⣶⠶⠶⠶⠷⣶⣶⣶⣬⣭⣙⣷⡀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠁⠀⠀⣿⠀⠙⢲⣞⠁⣠⡾⠟⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠻⢷⣄⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⠀⠀⠀⡇⠀⠀⢸⠏⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⡄⠀
    ⠀⠀⠀⢀⣠⣴⣶⣶⣦⣾⠃⠀⠀⢠⡇⠀⠀⣸⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡄
    ⠀⠀⣠⡿⠿⡄⠀⠀⠈⣿⡀⠀⠀⡼⠀⠀⣴⣃⣤⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇
    ⠀⣰⡿⠁⠀⠹⡄⠀⠀⣿⠿⣶⣴⡷⠒⠋⠻⡄⠀⢹⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠃
    ⢀⣿⠁⠀⠀⠀⢹⣀⣴⡏⠀⠀⠙⢿⣦⠀⠀⢹⡄⠀⠻⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣿⠋⠀
    ⢸⡿⢧⠀⠀⢀⡼⠯⣼⡇⠀⠀⠀⠀⠙⣷⡄⠀⣇⡤⠞⠉⠻⢷⣤⣄⣀⣀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣤⣶⣿⣿⣿⠀⠀
    ⣿⡇⠈⢧⣠⠎⠀⠀⢸⡇⠀⠀⠀⠀⠀⠘⣿⡞⠛⠢⣄⠀⣠⠏⠈⠉⡿⠛⠛⠛⢻⠛⠛⠛⠛⢿⠉⠁⣴⠟⠁⣿⠀⠀
    ⣿⠃⠀⡼⠧⣄⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠘⣷⡀⠀⠘⣶⣁⡀⠀⡼⠁⢀⡀⠀⠘⡇⣀⣠⣤⣬⣷⣾⠏⠀⠀⣿⠀⠀
    ⣿⣀⡞⠁⠀⠈⢣⡀⢸⡇⠀⠀⠀⠀⠀⠀⠀⢹⣇⠀⡼⠁⠀⠉⣹⠛⠉⠉⡉⠉⢙⣏⠁⠀⠀⠀⣼⡏⠀⠀⠀⣿⠀⠀
    ⣿⡿⣄⠀⠀⠀⠀⢳⣼⡇⠀⠀⠀⠀⠀⠀⠀⠈⣿⡾⠁⠀⠀⢀⡇⢠⠂⣜⣠⣤⠸⡟⢣⠀⠀⢰⡿⠀⠀⠀⠀⣿⠀⠀
    ⣿⡇⠈⠳⡄⠀⠀⣨⢿⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡗⠒⠲⢤⣸⠀⣸⣄⣿⣿⣿⣷⣿⣞⣠⣤⣿⠇⠀⠀⠀⠀⣿⠀⠀
    ⢸⣇⠀⠀⢹⡀⡰⠃⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⣹⢉⡽⣿⢿⣿⣿⣿⣿⣅⠀⠀⣿⠀⠀⠀⠀⢀⣿⠀⠀
    ⠘⣿⡀⠀⠈⡿⠁⠀⢸⣷⣦⣤⣤⣄⣀⡀⠀⠀⢸⡇⠀⠀⠀⡟⠘⡅⢇⢸⣿⣿⠇⡇⡸⠀⠀⣿⠀⢀⣀⣠⣼⣿⠀⠀
    ⠀⢻⣇⠀⣰⠛⠒⠦⣼⡇⠀⠀⠉⠉⠙⢻⣷⣦⣼⡏⠉⠓⠦⣿⠤⠵⠾⠾⠿⢿⣸⣯⠧⠖⠚⣿⡾⠟⠋⠉⣹⡇⠀⠀
    ⠀⠈⢿⣶⠇⠀⠀⠀⢸⣿⣶⣤⣤⣤⣀⣼⣀⣈⣙⣃⡀⠀⠀⢹⡀⠀⠀⢀⣀⣀⣸⣁⣀⣀⣤⣤⣤⣶⠶⠿⣿⡇⠀⠀
    ⠀⠀⠈⠻⣷⣄⠀⠀⢘⣧⠀⠀⠉⠉⠉⠙⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⢉⡉⠉⠉⠀⠀⠀⢀⣿⠁⠀⠀
    ⠀⠀⠀⠀⠈⠙⠛⠿⠻⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡷⠶⠶⠶⢶⡶⠿⠿⠿⠛⠋⠀⠀⢀⣀⣤⣾⡿⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡇⠀⠀⠀⢸⣧⣤⣤⣤⣶⣶⠶⠿⠛⠋⠁⣼⡇⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡍⠙⠛⢿⠿⠷⠶⠶⠾⠿⠿⠟⢻⡇⠀⠀⠀⢸⡏⠉⠁⠀⣀⣀⣀⣀⣄⣀⣀⣿⠁⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡟⠲⢦⣼⣀⣀⣀⣤⣤⣀⣀⡀⢸⡇⠀⠀⠀⢸⣷⠖⠚⠉⠉⠀⠀⠀⠀⠀⣸⡏⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⠀⠀⡏⠁⠀⠀⠀⠀⠀⠈⠉⣿⠇⠀⠀⠀⠀⢿⣆⠀⠀⠀⠀⠀⠀⠀⣠⡿⠁⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣧⣀⡇⠀⠀⠀⠀⠀⢀⣠⣾⠟⠀⠀⠀⠀⠀⠈⠻⢷⣶⣶⣶⣶⡶⠿⠛⠁⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠿⠿⠿⠿⠿⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀${`${Math.random().toString(16).substr(-1)}`}
        `)
    const {
      color
    } = this.state;
    return (
      <div className="artistStatement">
        <div className='as1' style={{color}}>Artist statement</div>
        <br/>
        <div className='as2'>I paint the <span className="human">human</span> psyche.</div>
        <div className='as3'>Tranquility, trepidation, triumphance and loss permeate my work.</div>
        <div className='as4'> The beings I paint are caught in a cathartic moment in time, with their wounds and hopes exposed, earning for <span className='bliss'>bliss.</span></div>
      </div>
    );
  }
}

export default ArtistStatement;
