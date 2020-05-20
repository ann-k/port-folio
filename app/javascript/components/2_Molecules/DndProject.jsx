import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

import Cover from '../1_Atoms/Cover.jsx'

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
            <div id='iconDnd' className='button button-icon' {...provided.dragHandleProps}>
              <img src={IconDnd} />
            </div>

            <Cover src={this.props.project.cover.url} size={'miniature'} />

            <div>
              <p>{this.props.project.name}</p>
            </div>

            <div id='iconRemove' className='button button-icon' onClick={() => this.props.removeProject(this.props.project.id, this.props.project.position)}>
              <img src={IconRemove} />
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}
