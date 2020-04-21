import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-beautiful-dnd'

import initialData from '../components/initialData'
import TabList from '../components/TabList'

export default class App extends React.Component {
  state = initialData

  onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) {
      return
    }

    const tabList = this.state.tabList
    const newProjectIds = Array.from(tabList.projectIds)
    newProjectIds.splice(source.index, 1)
    newProjectIds.splice(destination.index, 0, draggableId)

    // const newTabList = {
    //   ...tabList,
    //   projectIds: newProjectIds,
    // }

    const newState = {
      ...this.state,
      tabList: {
        ...this.state.tabList,
        projectIds: newProjectIds,
      }
    }

    console.log(newState);

    this.setState(newState, () => {
      console.log("state updated, this is new order" + newProjectIds);
    })
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.tabListOrder.map(tabListId => {
        const tabList = this.state.tabList
        // const projects = tabList.projectIds.map(projectId => this.state.projects[projectId])
        const newProjects = tabList.projectIds.map(projectId => {
          let filteredProjects = this.state.projects.filter(oldProject => oldProject.id === projectId)
          return filteredProjects
        })
        const projects = [].concat(...newProjects)

        return <TabList key={tabList.id} tabList={tabList} projects={projects} />
        })}
      </DragDropContext>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('tabsListArea'));
