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
          <a className="title" style={{ color:'#747474' }} href="">simonhuang.</a>
        </nav>
        <div className="c"></div>
      </div>
    )
  }
 
}

export default Navbar;
// export default withRouter(Navbar)
