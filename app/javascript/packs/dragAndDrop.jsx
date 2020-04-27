import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-beautiful-dnd'

import TabList from '../components/TabList'
import Test from '../components/TabList'
import initialData from '../components/initialData'

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

    const newState = {
      ...this.state,
      tabList: {
        ...this.state.tabList,
        projectIds: newProjectIds,
      }
    }

    this.setState(newState)

    let url = document.getElementById('tabsListArea').dataset.url + '.json'

    let newPositions = newProjectIds.map(id => {
      return parseInt(id)
    })

    console.log(url);

    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({newOrder: newPositions})
    })
    .then(res => {
      return res.json()
    })
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error)
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
