import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our new letter and  stay updated</p>
        <div className='newsletter01'>
            <input type="mail" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>

      
    </div>
  )
}

export default NewsLetter
