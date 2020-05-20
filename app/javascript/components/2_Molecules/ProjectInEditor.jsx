import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Cover from '../1_Atoms/Cover'

export default class ProjectInEditor extends React.Component {
  render() {
    return (
      <div>
        <Cover src={this.props.project.cover.url}/>
        <h3>{this.props.project.name}</h3>
      </div>
    )
  }
}
