import React from 'react'
import './cards.css'


const Cards = ({ data, title }) => {
  console.log(data)
  return (
    <div className='whole'>
      <h2 className='he'>{title}</h2>
      <div className='card'>

        {data && data.map((item, id) => {
          return (

            <img className='im' key={id} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
            
          )
        }
        )}
      </div>
    </div>
  )
}

export default Cards