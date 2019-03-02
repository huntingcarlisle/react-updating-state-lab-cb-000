// Code YouTubeDebugger Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
          errors: [], 
          user: null, 
          settings: { 
            bitrate: 8, 
            video: { 
              resolution: '1080p' 
            }
          }
    }
  }
  
  handleBitrate = () => {
    this.setState(
      settings: {
        ...this.state.settings
      })
  }
  
  
  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleBitrate}></button>
        <button className='resolution' onClick={this.handleResolution}></button>
      </div>
      );
  }
}