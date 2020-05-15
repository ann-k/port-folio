import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { DragDropContext } from 'react-beautiful-dnd'

import DndColumn from '../2_Molecules/DndColumn'

export default class DndList extends React.Component {
  render() {
    return (
      <div className="tab-list-area" id="tabsListArea">
        <DragDropContext onDragEnd={this.props.handleDragEnd}>
          {this.props.tabListOrder.map(tabListId => {
          const tabList = this.props.tabList

          let projects = tabList.projectPositions.map(projectId => this.props.projects.filter(project => project.id === projectId))
          projects = [].concat(...projects)

          return <DndColumn key={this.props.tabList.id}
                          tabList={this.props.tabList}
                          projects={this.props.projects}
                          removeProject={this.props.removeProject}
                          onPanelAddObjectsDisplayChange={this.props.handlePanelAddObjectsDisplayChange} />
          })}
        </DragDropContext>
      </div>
    )
  }
}
