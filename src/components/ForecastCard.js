import React from 'react'

const ForecastCard = props => {
  let { forecast } = props
  let forecastIcon = 'icon'
  if (forecast.includes('sun')) {
    forecastIcon += ' sun'
  } else if (forecast.includes('cloud')) {
    forecastIcon += ' cloud'
  } else if (forecast.includes('snow')) {
    forecastIcon += ' snowflake'
  } else {
    forecastIcon += ' star'
  }
  
  return (
    <div className="forecast-card">
      
      <i className={forecastIcon}></i>
      <div>{ forecast }</div>
    </div>
  )
}

export default ForecastCard