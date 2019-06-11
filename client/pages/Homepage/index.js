import React, { Component } from 'react'
import Photo from '../../components/Photo'
import './index.scss'
const content = require('./content.json')

const Homepage = () => {

  // console.log('bye', content)

  const landscape = content.landscape
  const portrait = content.portrait

  return (
    <div>
      <div className="photoLayout">
        <div className="landscape">
          <Photo 
            photoDetails={ landscape[1] } />
          <Photo 
            photoDetails={ landscape[2] } />
        </div>
        <div className="middleWords">
          <p id="words">"I don't trust words, I trust pictures"</p>
          <p id="speaker">-- Gilles Peress</p>
        </div>
        <div className="portrait">
          <Photo 
            photoDetails={ portrait[3] } />
          <Photo 
            photoDetails={ portrait[1] } />
          <Photo 
            photoDetails={ portrait[2] } />
        </div>
      </div>
      <div className="footer">
        <p id="disclaimer">made with love</p>
        <p id="me">by ac.</p>
      </div>
    </div>
)
}

export default Homepage;
