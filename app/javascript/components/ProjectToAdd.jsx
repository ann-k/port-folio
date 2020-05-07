import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import IconAdd from 'images/icons/button/add.svg'

export default class ProjectToAdd extends React.Component {
  render() {
    return (
      <div className='project-to-add'>
        <img src={IconAdd} onClick={() => this.props.addProject(this.props.project.id)}></img>
          <img src={this.props.project.cover.url} className='miniature'></img>
          <p>{this.props.project.name}</p>
      </div>
    )
  }
}
