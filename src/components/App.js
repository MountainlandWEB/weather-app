import React from 'react'
import '../styles.css'

import Loader from './Loader'
import ErrorDisplay from './ErrorDisplay'
import SeasonDisplay from './SeasonDisplay'
import ForecastCard from './ForecastCard'

class App extends React.Component {
  state = {
    errorMsg: null,
    loading: true,
    season: null
  }

  success = (position) => {
    this.setState({
      ...this.state,
      season: position.coords.latitude > 0 ? 'summer' : 'winter',
      loading: false
    })
  }
  
  handleError = (err) => {
    this.setState({
      ...this.state,
      errorMsg: err.message,
      loading: false
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
  }

  renderContent = () => {
    if (this.state.loading) {
      return (
        <Loader />
      )
    } else if (this.state.errorMsg) {
      return (
        <ErrorDisplay message={this.state.errorMsg} />
      )
    } else {
      return (
        <>
          <SeasonDisplay season={this.state.season} />
          <div className="flex-row">
            <ForecastCard forecast="rain"/>
            <ForecastCard forecast="partly cloudy"/>
            <ForecastCard forecast="cloudy"/>
            <ForecastCard forecast="sun"/>
            <ForecastCard forecast="sun"/>
            <ForecastCard forecast="sun"/>
            <ForecastCard forecast="cloudy"/>
          </div>
        </>
      )
    }
  }

  render() {
    return (
      <div className="app">
        { this.renderContent() }
      </div>
    )
  }
}

export default App