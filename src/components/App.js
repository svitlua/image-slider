import React, { Component } from 'react';
import sliderdata from '../sliderdata.json';
import Slide from './Slide';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentSlideNumber: 0,
      maxSlideNumber: 0,
    }
    this.timer = null;
  }

  componentWillMount(){
    let data = sliderdata.slider;
    this.setState({
      data: data,
      maxSlideNumber: data.length
    });
    this.startTimer();
  }

  startTimer = ()=> {
    clearInterval(this.timer);
    this.timer = setInterval(()=> {
            this.nextSlide();
          }, 3*1000); //3 seconds delay for better testing posposes
  }

  stopTimer = () => {
    clearInterval(this.timer);
  }

  componentWillUnmount() {
      clearInterval(this.timer);
      this.setState({
        data: null,
        maxSlideNumber: 0,
        currentSlideNumber: 0,
      });

  }


  prevSlide = () => {
    let prevSlideNumber = this.state.maxSlideNumber - 1;
    if (this.state.currentSlideNumber > 0){
      prevSlideNumber = this.state.currentSlideNumber - 1;
    }
    this.setState ({
      currentSlideNumber: prevSlideNumber
    })
    this.startTimer();
  }

  nextSlide = () => {
    let nextSlideNumber = 0;
    if (this.state.currentSlideNumber < this.state.maxSlideNumber - 1){
      nextSlideNumber = this.state.currentSlideNumber + 1;
    }
    this.setState ({
      currentSlideNumber: nextSlideNumber
    })
    this.startTimer();
  }

  render() {
    let currentSlideData = this.state.data[this.state.currentSlideNumber];
    return (
      <div className="app">
        <h1 className="app-title">Image Slider</h1>
        <div className="slider-container"
             onMouseOver = {this.stopTimer}
             onMouseLeave = {this.startTimer}>
          <Slide slideData = {currentSlideData}/>
          <div className="button button-prev" onClick={this.prevSlide}>
            <i class="fas fa-chevron-circle-left"></i>
          </div>
          <div className="button button-next" onClick={this.nextSlide}>
            <i class="fas fa-chevron-circle-right"></i>
          </div>
          <div className="counter">
            {this.state.currentSlideNumber+1}/{this.state.maxSlideNumber}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
