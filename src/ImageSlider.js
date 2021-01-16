// your ImageSlider code here!
import React from 'react';

export default class ImageSlider extends React.Component {
  constructor() {
    super ();
     this.state = {
    currentSlideIndes:0
  };
  
  }
 
  render () {
    return(
      <div>
      <p>`I am on slide ${this.state.currentSlideIndes}` </p>
      </div>
      );
  }
}