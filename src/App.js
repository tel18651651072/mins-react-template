import React, {Component} from 'react'
import './index.scss'
import Home from 'components/home/index.jsx'
class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="app">
              <Home/>
            </div>
        )
    }
}

export default App