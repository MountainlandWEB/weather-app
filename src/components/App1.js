// import React, { Component } from 'react'
import React from 'react'

import ErrorDisplay from './ErrorDisplay'
import SeasonDisplay from './SeasonDisplay'

// functional component before we converted to a class based component
// const App = () => {
//   if (navigator) {
//     navigator.geolocation.getCurrentPosition(success, handleError)
//   }
//   return (
//     <div>
//       <SeasonDisplay />
//     </div>
//   )
// }

class App extends React.Component {
  // you can use the constructor method if you wish but not necessary
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     coords: {
  //       lat: null,
  //       long: null
  //     }
  //   }
  //   // if you don't use arrow functions on your class methods
  //   this.handleError.bind(this)
  // }
  state = {
    errorMsg: null,
    season: null
  }

  success = (position) => {
    // Do not mutate state directly
    // this.state.coords.lat = position.coords.latitude

    // if you want to create a new object before setting the state
    // let newState = {
    //   ...this.state,
    //   season: position.coords.latitude > 0 ? 'summer' : 'winter'
    // }

    // always use set state to mutate the state of your component
    this.setState({
      ...this.state,
      season: position.coords.latitude > 0 ? 'summer' : 'winter'
    })

    // use forceUpdate to re render a react class based component
    // this.forceUpdate()
  }
  
  handleError = (err) => {
    this.setState({
      ...this.state,
      errorMsg: err.message
    })
  }
  // lifecycle method that gets run when the component is added to the page
  componentDidMount() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(this.success, this.handleError)
    } else {
      this.setState({
        ...this.state,
        errorMsg: 'Browsers does not support Geolocation'
      })
    }
    console.log('Mounted', this.state)
  }

  render() {
    if (this.state.errorMsg) {
      return (
        <div>
          <ErrorDisplay message={this.state.errorMsg} />
        </div>
      )
    } else {
      return (
        <div>
          <SeasonDisplay season={this.state.season} />
        </div>
      )
    }
  }
}

// class App extends Component {

// }

export default App