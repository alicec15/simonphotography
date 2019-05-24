import React, { Component } from 'react'
import Photo from '../../components/Photo'
import './index.scss'

const Homepage = () => (
  <div className="photoLayout">
    <div className="landscape">
      <Photo photoLink={ "img/photo1Landscape.JPG" } />
      <Photo photoLink={ "img/photo3Landscape.jpg" } />
    </div>
    <div className="portrait">
      <Photo photoLink={ "img/photo2Portrait.JPG" } />
      <Photo photoLink={ "img/photo5Portrait.JPG" } />
      <Photo photoLink={ "img/photo4Portrait.jpg" } />
    </div>
  </div>
)

export default Homepage;
