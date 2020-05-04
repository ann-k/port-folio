import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Droppable } from 'react-beautiful-dnd'

import Project from './Project'
import ProjectsContainer from '../components/ProjectsContainer'

export default class TabList extends React.Component {
  render() {
    return (
      <div className="tabs-list">
        <div className="tabs-list-header">
          <h3>{this.props.tabList.id}</h3>
        </div>

        <Droppable droppableId={this.props.tabList.id}>
          {(provided) => (
            <div
              className="tabs-list-items-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.projects.map((project, index) => <Project key={project.id} project={project} index={index} removeProject={this.props.removeProject}/>)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    )
  }
}

// ReactDOM.render(<ProjectsContainer />, document.getElementById('projectsContainer'))
