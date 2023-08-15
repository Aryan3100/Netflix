import React from 'react'
import ne from '../netflix.jpg'

import './header.css'

const Header = () => {
  return (
    <div>
        <div className='head'>
            <h1 className='net'>NETFLIX</h1>
    
        <div className='bt'>
            <select className='slec'>
                <option>
                    English
                </option>
                <option>
                    Hindi
                </option>
            </select>
            <button className='but'>
                Sing In
            </button>
        </div>
        </div>
    </div>
  )
}

export default Header