import React, { Component } from 'react'
import './index.scss'

const Photo = ({ photoLink }) => {

  
  return (
  <div className='picture'>
    <img src={ photoLink } />   
  </div>
  )
}

export default Photo;
