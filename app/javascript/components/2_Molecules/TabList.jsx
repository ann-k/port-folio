import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Droppable } from 'react-beautiful-dnd'

import DndProject from './DndProject'
import IconProject from 'images/icons/menu/project.svg'
import IconAdd from 'images/icons/button/add.svg'

export default class TabList extends React.Component {
  render() {
    return (
      <div className="tabs-list">
        <div className="tabs-list-header">
          <div className="tabs-list-name">
            <img src={IconProject} />
            <h3>Проекты</h3>
          </div>
          <button className="button button-small">
            <img src={IconAdd} />
            <h3>Добавить проект</h3>
          </button>
        </div>

        <Droppable droppableId={this.props.tabList.id}>
          {(provided) => (
            <div
              className="tabs-list-items-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.projects.map((project, index) => <DndProject key={project.id} project={project} index={index} removeProject={this.props.removeProject}/>)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    )
  }
}
