import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import PreviewContainer from '../components/3_Organisms/PreviewContainer'
import ConstructorContainer from '../components/3_Organisms/ConstructorContainer'

export default class PortfolioEdit extends React.Component {
  constructor(props) {
    super(props)
    const portfolio = JSON.parse(document.getElementById('dataContainer').dataset.portfolio)
    const content = JSON.parse(document.getElementById('dataContainer').dataset.contents)

    let projectsArray = JSON.parse(document.getElementById('dataContainer').dataset.projects)
    {/* let pInPArray = JSON.parse(document.getElementById('dataContainer').dataset.p_in_ps) */}
    let projectsWithStringPositions = projectsArray.map((item, i) => {
      {/* item.pInPId = pInPArray[i].id */}
      i++
      item.position = String(i)
      return item
    })
    let stringPositions = projectsWithStringPositions.map(item => item.position)

    let allProjects = JSON.parse(document.getElementById('dataContainer').dataset.all_projects)
    let currentProjects = projectsArray
    let projectsToAdd = allProjects.filter(project => {
      if (!currentProjects.map(currentProject => {
        if (project.id === currentProject.id) return 'not yet in portfolio'
      }).includes('not yet in portfolio')) return true
    })


    this.state = {
      portfolio: portfolio,
      projectsToAdd: projectsToAdd,
      projects: projectsWithStringPositions,
      tabList: {
        id: 'Проекты',
        projectPositions: stringPositions
      },
      tabListOrder: ['tablist-1'],
      content: content,

      panelExportDisabled: true,
      panelAddObjectsDisabled: true,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handlePanelExportDisplayChange = this.handlePanelExportDisplayChange.bind(this)
    this.handlePanelAddObjectsDisplayChange = this.handlePanelAddObjectsDisplayChange.bind(this)
  }

  handlePanelExportDisplayChange(event) {
    this.setState(prevState => ({
      ...this.state,
      panelExportDisabled: !prevState.panelExportDisabled
    }))
  }

  handlePanelAddObjectsDisplayChange(event) {
    this.setState(prevState => ({
      ...this.state,
      panelAddObjectsDisabled: !prevState.panelAddObjectsDisabled
    }))
  }

  handleInputChange(event) {
    const value = event.target.value
    const name = event.target.name

    this.setState({
      ...this.state,
      portfolio: {
        ...this.state.portfolio,
        [name]: value
      }
    })

    const url = document.getElementById('dataContainer').dataset.url_for_portfolio
    fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        [name]: value
      })
    }).then(res => {
      return res.json()
    })
  }

  addProject = projectId => {
    const allProjects = JSON.parse(document.getElementById('dataContainer').dataset.all_projects)
    const newProject = allProjects.filter(project => project.id === projectId)[0]
    const newProjectsArray = this.state.projects
    newProjectsArray.unshift(newProject)
    const newProjectsToAdd = this.state.projectsToAdd.filter(projectToAdd => projectToAdd.id != newProject.id)
    console.log("when adding project id is " + newProject.id);

    const newProjectsWithNewPositions = newProjectsArray.map((project, i) => {
      i++
      project.position = String(i)
      return project
    })

    const newStringPositions = newProjectsWithNewPositions.map(project => project.position)

    const newState = {
      ...this.state,
      projects: newProjectsWithNewPositions,
      projectsToAdd: newProjectsToAdd,
      tabList: {
        id: 'Проекты',
        projectPositions: newStringPositions,
      },
    }
    this.setState(newState)

    // CREATE A NEW PROJECT IN PORTFOLIO, THEN UPDATE PROJECT IN PORTFOLIOS POSITIONS
    let urlForCreate = document.getElementById('dataContainer').dataset.url_for_p_in_ps
    let portfolioId = JSON.parse(document.getElementById('dataContainer').dataset.portfolio).id

    let urlForSort = document.getElementById('dataContainer').dataset.url_for_sort + '.json'
    let newPositions = this.state.projects.map(project => {
      return parseInt(project.position)
    })

    fetch(urlForCreate, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        portfolio_id: portfolioId,
        project_id: projectId,
        position: 0,
      })
    }).then(res => {
      return res.json()
    })
    .then(data => {
      fetch(urlForSort, {
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
    })
  }

  handleDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) {
      return
    }

    const projectPositions = Array.from(this.state.tabList.projectPositions)
    projectPositions.splice(source.index, 1)
    projectPositions.splice(destination.index, 0, draggableId)

    const projectsInNewOrder = projectPositions.map(position => this.state.projects.filter(project => project.position == position)).flat()
    const newProjectsWithNewPositions = projectsInNewOrder.map((project, i) => {
      i++
      project.position = String(i)
      return project
    })

    const newState = {
      ...this.state,
      projects: newProjectsWithNewPositions,
    }
    this.setState(newState)

    let url = document.getElementById('dataContainer').dataset.url_for_sort + '.json'
    let newPositions = projectPositions.map(position => {
      return parseInt(position)
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

  removeProject = (projectId, projectPosition) => {
    //find current project positions and filter out the one that got added
    const projectPositions = Array.from(this.state.tabList.projectPositions).filter(item => item != projectPosition)
    console.log('current projects positions');
    console.log(Array.from(this.state.tabList.projectPositions));
    console.log('current projects positions without the one that got added');
    console.log(projectPositions);

    const projectsInNewOrder = projectPositions.map(id => this.state.projects.filter(project => project.position == id)).flat()
    const newProjectsWithNewPositions = projectsInNewOrder.map((project, i) => {
      i++
      project.position = String(i)
      return project
    })
    const newProjectsPositions = projectPositions.map((position, index) => {
      position = String(index + 1)
      return position
    })

    const allProjects = JSON.parse(document.getElementById('dataContainer').dataset.all_projects)
    const currentProjects = newProjectsWithNewPositions
    const newProjectsToAdd = allProjects.filter(project => {
      if (!currentProjects.map(currentProject => {
        if (project.id === currentProject.id) return "not yet in portfolio"
      }).includes("not yet in portfolio")) return true
    })

    const newState = {
      ...this.state,
      projects: newProjectsWithNewPositions,
      tabList: {
        ...this.state.tabList,
        projectIds: newProjectsPositions,
      },
      projectsToAdd: newProjectsToAdd,
    }
    this.setState(newState)

    let url = document.getElementById('dataContainer').dataset.url_for_p_in_ps + '_delete'
    let portfolioId = JSON.parse(document.getElementById('dataContainer').dataset.portfolio).id
    fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        portfolio_id: portfolioId,
        project_id: projectId
      })
    }).then(res => {
      return res.json()
    })

    // let url = document.getElementById('dataContainer').dataset.url_for_p_in_ps + '/' + pInPId
    // fetch(url, {
    //   method: 'DELETE',
    // }).then(res => {
    //   return res.json()
    // })
  }


  render() {
    return (
      <>
        <PreviewContainer portfolio={this.state.portfolio}
                          projects={this.state.projects}
                          projectsToAdd={this.state.projectsToAdd}
                          addProject={this.addProject}
                          panelAddObjectsState={this.state.panelAddObjectsDisabled}
                          handlePanelAddObjectsDisplayChange={this.handlePanelAddObjectsDisplayChange} />
        <ConstructorContainer portfolio={this.state.portfolio}
                              projects={this.state.projects}
                              tabList={this.state.tabList}
                              tabListOrder={this.state.tabListOrder}
                              handleDragEnd={this.handleDragEnd}
                              removeProject={this.removeProject}
                              handleInputChange={this.handleInputChange}
                              content={this.state.content}
                              panelExportState={this.state.panelExportDisabled}
                              handlePanelExportDisplayChange={this.handlePanelExportDisplayChange}
                              handlePanelAddObjectsDisplayChange={this.handlePanelAddObjectsDisplayChange} />
      </>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<PortfolioEdit />, document.getElementById('dataContainer'))
})
