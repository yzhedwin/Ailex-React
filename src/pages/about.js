import React, { Component } from "react";
import ReactPlayer from "react-player/youtube";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './about.css';


class About extends Component {

  render() {

    const slides = [
      { title: 'https://youtu.be/wE8lKcbFY-Y', description:'Milestone 1'}
      ,{ title: 'https://www.youtube.com/watch?v=jDDe8EGK438', description:'Milestone 2'}
    ];

    return (
 
<Slider>
  {slides.map((slide, index) => <div key={index}>
    <h1>{slide.description}</h1>
    <h2><ReactPlayer url={slide.title} controls={true} /></h2>
  </div>)}
</Slider>
    );
  }
}

export default About;