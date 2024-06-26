import React, { useEffect, useState } from 'react'
import img from '../mo.png'
import './login.css'
import axios from 'axios';
import Cards from './Cards';


function List({title , movietype}) {

  const [apidata, setApi] = useState([]);

  const dataapi = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movietype}?api_key=d9bac85a65f5e3eee0e5ce14540b8dd1`
  console.log(url)
    try {
      
      const response = await axios.get(url);
      setApi(response.data)
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    dataapi();
  }, [])
 

  return (
    <Cards title={title} data={apidata.results} />
        
  )
}

export default List
 

