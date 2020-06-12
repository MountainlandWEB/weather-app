import React from 'react'

class ErrorDisplay extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>{ this.props.message }</div>
    )
  }
}

export default ErrorDisplay

