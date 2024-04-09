import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className="hero">
       
            <div className="hero-left">  
            <h2>NEW ARRAIVALS ONLY</h2>
                    <div className="hero-hand-icon">
                        <p>new<img src={hand_icon} alt="" /></p>
                    </div>
                <p>collection</p>
                <p>for everyone</p>
            </div> 
            <div className="hero-latest-btn">
                 <div>Lastest collection</div>
                 <img src={arrow_icon} alt="" />
            </div>
            <div className="hero_right">
                <img src={hero_img} alt="" />
            </div>
           
    </div>
  )
}

export default Hero