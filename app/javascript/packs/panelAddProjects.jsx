import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ProjectToAdd from '../components/ProjectToAdd'

let allProjects = JSON.parse(document.getElementById('panelAddProjects').dataset.allprojects)
let currentProjects = JSON.parse(document.getElementById('panelAddProjects').dataset.projects)

let projectsData = allProjects.filter(project => {
  if (!currentProjects.map(currentProject => {
    if (project.id === currentProject.id) return "already in portfolio"
  }).includes("already in portfolio")) return true
})

let stateData = {
  projects: projectsData,
}

export default class PanelAddProjects extends React.Component {
  state = stateData

  addProject = projectId => {
    let url = document.getElementById('panelAddProjects').dataset.url
    let portfolioId = document.getElementById('panelAddProjects').dataset.portfolioid

    fetch(url, {
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
  }

  render() {
    return (
      <>
        <div>
          <h3>Добавить проекты</h3>
          <a>Добавить все</a>
        </div>
        <div>
          {this.state.projects.map((project, index) => <ProjectToAdd key={project.id} project={project} index={index} addProject={this.addProject} />)}
        </div>
      </>
    )
  }
}

ReactDOM.render(<PanelAddProjects />, document.getElementById('panelAddProjects'));
