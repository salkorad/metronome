import React, { Component } from 'react';
import './metronome.css';
import beat from './assets/beat.wav';


class Metronome extends Component {
    constructor(props) {
        super(props);
        this.state = {
          playing: false,
          BPM: 40,
        };
        this.beat = new Audio(beat);
      
    }
      soundPlay = () => {
        this.beat.play();
      
      }
      startStop = () => {
        if(this.state.playing) {
          clearInterval(this.timer);
          this.setState({
            playing: false
          });
        } else {
          this.timer = setInterval(this.soundPlay, 60000 / this.state.BPM);
          this.setState({ playing: true }, this.soundPlay);
        }
      }

      handleBpmChanging = e => {
        const BPM = e.target.value;
      
        if(this.state.playing) {
          clearInterval(this.timer);
          this.timer = setInterval(this.soundPlay, 60000 / BPM);
          this.setState({ BPM });
        } else {
          this.setState({ BPM });
        }
      }
    
      render() {
        const { playing, BPM } = this.state;
      
        return (
          <div className="metronome">
            <h2>Metronome</h2>
            <div className="input-button">
              <div className="bpm-value">{BPM} BPM</div>
              <input
                type="range"
                min="40"
                max="200"
                value={BPM}
                onChange={this.handleBpmChanging} />
           
            <div>
           {playing ? (<button className="button" onClick={this.startStop}> Stop </button>) : 
           (<button className="button" onClick={this.startStop}>Start</button>)}
           
            
            </div>
            </div>
          </div>
        );
      }
    }
export default Metronome;