import React from 'react'
import ne from '../netflix.jpg'

import './header.css'
import Banner from './Banner'
import { useNavigate } from 'react-router-dom'

const Header = () => {
 
  const navi = useNavigate();

  function handle(){
    navi ('/login')
  }

  const lang = [{id:1 , name:'English' }
    ,{id:2, name:'Hindi'}
  ]

  return (
    <div>
        <div className='head'>
            <h1 className='net'>NETFLIX</h1>
    
        <div className='bt'>
            <select className='slec'>
               {  lang.map((item )=>{
                    return(
                        <option key={item.id}>{item.name}</option>
                    )
                })}
            </select>
            <button onClick={handle} className='but'>
                Sing In
            </button>
        </div>
        </div>
        
    </div>
    
  )

}

export default Header