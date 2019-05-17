import React, { Component } from 'react'
import './index.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <nav className="navbar navbar-expand-sm fixed-top navbar-light">
        <a className="navbar-brand" href="">simonhuang....</a>
      </nav>
    )
  }
 
}

export default Navbar;
// export default withRouter(Navbar)
