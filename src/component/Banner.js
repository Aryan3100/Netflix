import React from 'react'
import bg from '../bg.jpg'
import './banner.css'

const Banner = () => {
    return (
        <div className='home'>
            <div className='story'>
                <h1>
                    Unlimited movies, TV shows and more</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div>
                    <input type='text' placeholder='Email Address' />
                    <button>Get Started </button>
                </div>
            </div>
            <div className='shadow'></div>
            
        </div>
    )
}

export default Banner