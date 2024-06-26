import React from 'react'
import './head.css'



const Head = () => {
    const lang = [{id:1, name:'Home'},{ id:2 , name: 'TVShows' }
        ,{ id:3 , name: 'Latest' },{ id:4 , name: 'Live' },{ id:5 , name: 'Mylist' }
    ]
  return (
    <div>
    <div className='heada'>
        <h1 className='net'>NETFLIX</h1>
        <ul className='list'>
        {  lang.map((item )=>{
                return(
                    <li className='lis' key={item.id}>{item.name}</li>
                )
            })}
        </ul>
    
    </div>
    
</div>

  )
}

export default Head