import React, { Component } from 'react'
import Navbar from '../components/Navbar'

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount(){
    console.log('this', this.props)
  }

  render() {
    return (
        <Navbar />
    )
  }
}

export default App;

/* 
<Router history={ browserHistory }>  
          <div className="wrapper">
            <Navbar />
            <Switch>

            
                </Switch>
                </div>
              </Router>
*/