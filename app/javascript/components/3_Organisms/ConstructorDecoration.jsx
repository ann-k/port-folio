import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class ConstructorDecoration extends React.Component {
  render() {
    return (
      <div className={this.props.tabActive === 'decoration' ? 'constructor' : 'constructor disabled'} id='decoration'>
        <div><p>Coming soon...</p></div>
      </div>
    )
  }
}
