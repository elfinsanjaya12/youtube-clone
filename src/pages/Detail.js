import React, { Component } from 'react';
import ReactPlayer from 'react-player'
 
class Detail extends Component {
  render () {
    return <ReactPlayer url={`https://www.youtube.com/watch?v=${this.props.match.params.id}`} playing controls />
  }
}

export default Detail;