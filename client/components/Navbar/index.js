import React, { Component } from 'react'
import './index.scss'

const Navbar = () => (
  <nav className="">
    <img className="logo" src="img/simonLogo.png" />
    <a className="title" href="">simonhuang.</a>
    <ul>
      <li><a href="">travel</a></li>
      <li><a href="">about</a></li>
      <li><a href="">contact</a></li>
      <li><a href="https://www.instagram.com/heyitsnomis/?hl=en" target="_blank"><img className="insta" src="img/instaIcon.jpeg" /></a></li>
    </ul>
  </nav>
)

export default Navbar;
// export default withRouter(Navbar)
