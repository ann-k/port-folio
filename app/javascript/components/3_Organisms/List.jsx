import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { DragDropContext } from 'react-beautiful-dnd'

import TabList from '../2_Molecules/TabList'

export default class List extends React.Component {
  render() {
    return (
      <div className="tab-list-area" id="tabsListArea">
        <DragDropContext onDragEnd={this.props.handleDragEnd}>
          {this.props.tabListOrder.map(tabListId => {
          const tabList = this.props.tabList

          let projects = tabList.projectPositions.map(projectId => this.props.projects.filter(project => project.id === projectId))
          projects = [].concat(...projects)

          return <TabList key={this.props.tabList.id}
                          tabList={this.props.tabList}
                          projects={this.props.projects}
                          removeProject={this.props.removeProject}
                          onPanelAddProjectsDisplayChange={this.props.handlePanelAddProjectsDisplayChange} />
          })}
        </DragDropContext>
      </div>
    )
  }
}
