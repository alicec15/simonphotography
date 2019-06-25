import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.scss'

const Navbar = () => (
  <nav className="">
    <img className="logo" src="img/simonLogo.png" />
    <a className="title" href="">simonhuangPhotography.</a>
    <ul>
      <li><Link className="navLink" to="/travel">travel</Link></li>
      <li><Link className="navLink" to="">about</Link></li>
      <li><Link className="navLink" to="">contact</Link></li>
      <li><a className="instaLink" href="https://www.instagram.com/heyitsnomis/?hl=en" target="_blank"><img className="insta" src="img/instaIcon.jpeg" /></a></li>
    </ul>
  </nav>
)

export default withRouter(Navbar);
// export default withRouter(Navbar)
