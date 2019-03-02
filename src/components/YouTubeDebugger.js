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
      Object.assign({}, this.state.addressInfo, {
    city: 'New York City'
  })
      
      
      
      settings: {
        ...this.state.settings,
        bitrate: 12
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