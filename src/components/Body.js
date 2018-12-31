import React, { Component } from 'react';

class Body extends Component {
    constructor(){
      super()
      this.state = {
        textBody: 'Yang boleh masuk rumah hantu tinggi badannya harus lebih dari 100 cm'
      }
    }
    render(){
      return (
        <p>{this.state.textBody}</p>
      )
    }
  }

  export default Body