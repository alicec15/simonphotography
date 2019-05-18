import React, { Component } from 'react'
import './index.scss'

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <nav className="">
          <img className="logo" src="img/simonLogo.png" />
          <a className="title" href="">simonhuang.</a>
          <ul>
            <li><a href="">equipment</a></li>
            <li><a href="">about</a></li>
            <li><a href="">contact</a></li>
          </ul>
        </nav>
       
      </div>
    )
  }
 
}

export default Navbar;
// export default withRouter(Navbar)
