import React from 'react'
import Cards from './Cards'
import List from './List'
import banner from './4375616.jpg'
import './main.css'
import logo from './logo.jpeg'
import Head from './Head'





function Main() {

  return (
    < >
    <Head></Head>
      <div className='main_back'>
        <img className='bann' src={banner}></img>
      </div>
      <div className='god'>
        <img className='logo' src={logo}></img>
        <p className='par' >The grave course of events set in motion by Thanos, that wiped out half the universe and fractured the Avengers ranks </p>
        <div>
        <button className='new' >Play Now </button>
        <button className='wen' >Know More </button>
        </div>
      </div>

      <div className='backs'>
        <List title='Treanding Movies' movietype='now_playing' ></List>
        <List title='latest Movie' movietype='top_rated' ></List>
        <List title='On Netflix' movietype='upcoming' ></List>
        <List title='Top Rated' movietype='popular' ></List>
      </div>

    </>
  )
}

export default Main