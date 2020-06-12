import React from 'react'
import styles from '../seasonDisplay.module.css'

class SeasonDisplay extends React.Component {
  render() {
    let { season } = this.props
    return (
      <div className="season-display">
        <div className="flex-row">
          <div className={styles.seasonCard}>
            <i className={ season === 'summer' ? 'snowflake icon' : 'sun icon' }></i>
              { season === 'summer' ? "School's out for SUMMER!" : "Let's go skiing!" }
            <i className={ season === 'summer' ? 'snowflake icon' : 'sun icon' }></i>
          </div>
        </div>
      </div>
    )
  }
}

SeasonDisplay.defaultProps = {
  season: 'summer'
}

export default SeasonDisplay