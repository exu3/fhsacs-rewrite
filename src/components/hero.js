import React from 'react'
import heroImg from '../../static/acsrelay.jpg'

const Hero = () => (
  <div className="hero-titles">
    <img src={heroImg} alt="relay for life" className="hero-img" />
      <div className="hero-text">
        <h1>Foothill High School</h1>
        <h2>American Cancer Society Club</h2>
        <p>The best club on campus.</p>
        <button className="primary-btn">Learn more</button>
      </div> 
  </div>
)

export default Hero