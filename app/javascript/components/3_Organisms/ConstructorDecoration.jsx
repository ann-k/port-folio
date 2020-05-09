import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class ConstructorDecoration extends React.Component {
  render() {
    return (
      <div className={this.props.disabled ? 'constructor disabled' : 'constructor'} id="decoration">
        <div><p>Coming soon...</p></div>
      </div>
    )
  }
}
