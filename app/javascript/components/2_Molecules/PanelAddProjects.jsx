import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ProjectToAdd from '../2_Molecules/ProjectToAdd'
import IconRemove from 'images/icons/remove.svg'

export default class PanelAddProjects extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.onPanelAddProjectsDisplayChange(event)
  }

  render() {
    return (
      <div className={this.props.disabled ? 'panel disabled' : 'panel'} id='panelAddProjects'>
        <div>
          <h3>Добавить проекты</h3>
          <a>Добавить все</a>
        </div>

        <div>
          {this.props.projectsToAdd.map((project, index) => <ProjectToAdd key={project.id} project={project} index={index} addProject={this.props.addProject} />)}
        </div>

        <div id='iconRemove' onClick={this.handleChange}>
          <img src={IconRemove} />
        </div>
      </div>
    )
  }
}
