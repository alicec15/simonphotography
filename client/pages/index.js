import React, { Component } from 'react'
import Navbar from '../components/Navbar'
// import Portfolio from '../components/Photo'
import Homepage from './Homepage'

const App = () => (
  <div>
    <Navbar />
    {/* <Portfolio photoLink={ "img/photo1Landscape.JPG" }/> */}
    <Homepage />
  </div>
)

export default App;
