import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants' 
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(()=>{
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results)
        const randomIndex = Math.floor(Math.random() * response.data.results.length)
        const item = response.data.results[randomIndex]
        //setMovie(response.data.results[0])
        setMovie(item)
       })
    },[])
   
  return (
         <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button  className='button'>play</button>
                <button className='button'>my playlist</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview : ""} </h1>
        </div>
        <div className="fade_bottom">
        </div>
        <div>

        </div>
    </div>   
  )
}

export default Banner 