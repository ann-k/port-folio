import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

import IconDnd from 'images/icons/dragndrop.svg'
import IconRemove from 'images/icons/remove.svg'

export default class DndProject extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.project.position} index={this.props.index}>
        {(provided) => (
          <div
            className='tabs-list-item'
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <img src={IconDnd} {...provided.dragHandleProps} />
            <img src={this.props.project.cover.url} className='miniature' />
            <p>{this.props.project.name}</p>
            <img src={IconRemove} onClick={() => this.props.removeProject(this.props.project.id, this.props.project.position)} />
          </div>
        )}
      </Draggable>
    )
  }
}
