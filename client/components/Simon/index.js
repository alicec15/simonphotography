import React, { Component } from 'react'
import './index.scss'

const Simon = ({ simonDetails }) => {


  return (
    <div className='containerSimon'>
      <div className='pictureSimon'>
        <img src={ simonDetails.photoLink } /> 
      </div>
      <div className='infoSimon'>
        <h2>{ simonDetails.deets }</h2>
      </div>
    </div>
  )
}

export default Simon;