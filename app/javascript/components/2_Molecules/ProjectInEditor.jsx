import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class ProjectInEditor extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.project.cover.url} />
        <h3>{this.props.project.name}</h3>
      </div>
    )
  }
}
