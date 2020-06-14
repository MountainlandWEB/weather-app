import React from 'react'

class ErrorDisplay extends React.Component {
  render() {
    return (
      <div className="error-display">
        <div className="flex-row">
          <div className="error-display-card">
            { this.props.message }
          </div>
        </div>
      </div>
    )
  }
}

export default ErrorDisplay

