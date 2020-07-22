import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.scss'

const Navbar = () => (
  <nav className="">
    <img className="logo" src="img/simonLogo.png" />
    <Link className="title" to="/">simonhuangPhotography.</Link>
    <ul>
      <li><Link className="navLink" to="/travel">travel</Link></li>
      <li><Link className="navLink" to="/about">about</Link></li>
      <li><Link className="navLink" to="/contact">contact</Link></li>
      <li><a className="instaLink" href="https://www.instagram.com/heyitsnomis/?hl=en" target="_blank"><img className="insta" src="img/instaIcon.jpeg" /></a></li>
    </ul>
  </nav>
)

export default withRouter(Navbar);
// export default withRouter(Navbar)
// adding something
