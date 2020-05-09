import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { DragDropContext } from 'react-beautiful-dnd'

import TabList from '../2_Molecules/TabList'



// initialData






export default class List extends React.Component {
  constructor(props) {
    super(props)
    let projectsArray = JSON.parse(document.getElementById('dataContainer').dataset.projects)
    let pInPArray = JSON.parse(document.getElementById('dataContainer').dataset.p_in_ps)

    let projectsWithStringIds = projectsArray.map((item, i) => {
      item.pInPId = pInPArray[i].id
      i++
      item.id = String(i)
      return item
    })

    let stringIds = projectsWithStringIds.map(item => item.id)

    const initialData = {
      projects: projectsWithStringIds,
      tabList: {
        id: 'Проекты',
        projectIds: stringIds
      },
      tabListOrder: ['tablist-1']
    }
    this.state = initialData
  }

  removeProject = (pInPId, projectId) => {
    const projectIds = Array.from(this.state.tabList.projectIds).filter(item => item != projectId)
    const projectsInNewOrder = projectIds.map(id => this.state.projects.filter(project => project.id == id)).flat()
    const newProjectsWithNewIds = projectsInNewOrder.map((project, i) => {
      i++
      project.id = String(i)
      return project
    })
    const newProjectsIds = projectIds.map((id, index) => {
      id = String(index + 1)
      return id
    })

    const newState = {
      ...this.state,
      projects: newProjectsWithNewIds,
      tabList: {
        ...this.state.tabList,
        projectIds: newProjectsIds,
      }
    }
    this.setState(newState)

    let url = document.getElementById('dataContainer').dataset.url_for_p_in_ps + '/' + pInPId
    fetch(url, {
      method: 'DELETE',
    }).then(res => {
      return res.json()
    })
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) {
      return
    }

    const projectIds = Array.from(this.state.tabList.projectIds)
    projectIds.splice(source.index, 1)
    projectIds.splice(destination.index, 0, draggableId)

    const projectsInNewOrder = projectIds.map(id => this.state.projects.filter(project => project.id == id)).flat()
    const newProjectsWithNewIds = projectsInNewOrder.map((project, i) => {
      i++
      project.id = String(i)
      return project
    })

    const newState = {
      ...this.state,
      projects: newProjectsWithNewIds,
    }
    this.setState(newState)

    let url = document.getElementById('dataContainer').dataset.url_for_sort + '.json'
    let newPositions = projectIds.map(id => {
      return parseInt(id)
    })

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
      <div className="tab-list-area" id="tabsListArea">
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.tabListOrder.map(tabListId => {
          const tabList = this.state.tabList

          let projects = tabList.projectIds.map(projectId => this.state.projects.filter(project => project.id === projectId))
          projects = [].concat(...projects)

          return <TabList key={tabList.id}
                          tabList={tabList}
                          projects={projects}
                          removeProject={this.removeProject} onPanelAddProjectsDisplayChange={this.props.handlePanelAddProjectsDisplayChange} />
          })}
        </DragDropContext>
      </div>
    )
  }
}
