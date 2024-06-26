import React from 'react'
import bg from '../bg.jpg'
import './banner.css'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
 
     const navigat = useNavigate();
    function call(){
        navigat('/main')
    }

    return (
        <div className='home'>
            <div className='story'>
                <h1>
                    Unlimited movies, TV shows and more</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div>
                    <input type='text' placeholder='Email Address' />
                    <button onClick={call}> Get Started </button>
                </div>
            </div>
            <div className='shadow'></div>
            
            {/* <div className='tv'>
                <h1>Enjoy on your tv</h1>
                <h3
                >Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
            </div> */}
             
        </div>
    )
}

export default Banner