import React from 'react'

const Loader = props => {
  return (
    <div className="loader">
      <div className="ui">
        <div className="ui active inverted dimmer">
          <div className="ui text large loader">Loading</div>
        </div>
        <p></p>
      </div>
    </div>
    
  )
}

export default Loader