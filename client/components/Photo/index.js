import React, { Component } from 'react'
import './index.scss'

const Photo = ({ photoDetails }) => {
  // console.log('hi', photoDetails)
  
  return (
    <div className='container'>
      
      <div className='picture'>
        <img src={ photoDetails.photoLink } />   
      </div>
      <div className='info'>
        <ul>
          <li><h2>MODEL</h2><p>{ photoDetails.name }</p></li>
          <li><h2>LOCATION</h2><p>{ photoDetails.location }</p></li>
          <li><h2>INSTAGRAM</h2><p>{ photoDetails.instagram }</p></li>
        </ul>
      </div>

    </div>

  )
}

export default Photo;
