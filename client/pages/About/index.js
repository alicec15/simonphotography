import React, { Component } from 'react'
// import Photo from '../../components/Photo'
import Simon from '../../components/Simon'
import './index.scss'

const About = () => {
  
  const simonInformation = {
    name: "simon h.",
    photoLink: "img/simonPhoto1.JPG",
    deets: "WEIGHTLIFTER"
  }

  const simonInformation2 = {
    name: "simon h.",
    photoLink: "img/simonPhoto2.JPG",
    deets: "PHOTOGRAPHER"
  }

  return (
    <div>
      <p className="aboutName">About</p>
      <span className="border"></span>
      <div className="aboutDescription">
        <Simon simonDetails={ simonInformation } />
        <Simon simonDetails={ simonInformation2 } />
        <Simon simonDetails={ simonInformation } />
      </div>
    </div>
  )
}

export default About;