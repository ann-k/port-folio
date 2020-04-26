import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

import DndIcon from 'images/icons/constructor/dragndrop.svg'
import RemoveIcon from 'images/icons/constructor/remove.svg'

export default class Project extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.project.id} index={this.props.index}>
        {(provided) => (
          <div
            className="tabs-list-item"
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <img src={DndIcon} {...provided.dragHandleProps}></img>
            <img src={this.props.project.cover.url} className="miniature"></img>
            <p>{this.props.project.name}</p>
            <img src={RemoveIcon}></img>
          </div>
        )}
      </Draggable>
    )
  }
}
