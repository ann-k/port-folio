import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import PreviewContainer from '../components/3_Organisms/PreviewContainer'
import ConstructorContainer from '../components/3_Organisms/ConstructorContainer'

export default class ProjectEdit extends React.Component {
  constructor(props) {
    super(props)
    const project = JSON.parse(document.getElementById('dataContainer').dataset.project)
    const portfolios = JSON.parse(document.getElementById('dataContainer').dataset.portfolios)
    const content = JSON.parse(document.getElementById('dataContainer').dataset.contents)

    const allPortfolios = JSON.parse(document.getElementById('dataContainer').dataset.all_portfolios)
    const currentPortfolios = portfolios
    const portfoliosToAdd = allPortfolios.filter(portfolio => {
      if (!currentPortfolios.map(currentPortfolio => {
        if (portfolio.id === currentPortfolio.id) return 'not yet in portfolio'
      }).includes('not yet in portfolio')) return true
    })

    this.state = {
      project: project,
      portfolios: portfolios,
      portfoliosToAdd: portfoliosToAdd,
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
      project: {
        ...this.state.project,
        [name]: value
      }
    })

    const url = document.getElementById('dataContainer').dataset.url_for_project
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

  addToPortfolio = portfolioId => {
    const allPortfolios = JSON.parse(document.getElementById('dataContainer').dataset.all_portfolios)
    const newPortfolio = allPortfolios.filter(portfolio => portfolio.id === portfolioId)[0]
    const newPortfolios = this.state.portfolios
    newPortfolios.push(newPortfolio)
    const newPortfoliosToAdd = this.state.portfoliosToAdd.filter(portfolioToAdd => portfolioToAdd.id != newPortfolio.id)

    const newState = {
      ...this.state,
      portfolios: newPortfolios,
      portfoliosToAdd: newPortfoliosToAdd,
    }
    this.setState(newState)

    // CREATE A NEW PROJECT IN PORTFOLIO
    let urlForCreate = document.getElementById('dataContainer').dataset.url_for_p_in_ps
    let projectId = JSON.parse(document.getElementById('dataContainer').dataset.project).id
    let urlForSort = document.getElementById('dataContainer').dataset.url_for_sort + '.json'

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
        body: JSON.stringify({portfolio_id: portfolioId})
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

  removePortfolio = (portfolioId) => {
    const allPortfolios = JSON.parse(document.getElementById('dataContainer').dataset.all_portfolios)
    const currentPortfolios = this.state.portfolios.filter(portfolio => portfolio.id != portfolioId)
    const newPortfoliosToAdd = allPortfolios.filter(portfolio => {
      if (!currentPortfolios.map(currentPortfolio => {
        if (portfolio.id === currentPortfolio.id) return 'not yet in portfolio'
      }).includes('not yet in portfolio')) return true
    })

    const newState = {
      ...this.state,
      portfolios: currentPortfolios,
      portfoliosToAdd: newPortfoliosToAdd,
    }
    this.setState(newState)

    let url = document.getElementById('dataContainer').dataset.url_for_p_in_ps + '_delete'
    let projectId = JSON.parse(document.getElementById('dataContainer').dataset.project).id
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

    // UPDATE POSITION
  }

  render() {
    return (
      <>
        <PreviewContainer project={this.state.project}
                          portfolios={this.state.portfolios}
                          portfoliosToAdd={this.state.portfoliosToAdd}
                          addToPortfolio={this.addToPortfolio}
                          panelAddObjectsState={this.state.panelAddObjectsDisabled}
                          handlePanelAddObjectsDisplayChange={this.handlePanelAddObjectsDisplayChange} />
        <ConstructorContainer project={this.state.project}
                              portfolios={this.state.portfolios}
                              removePortfolio={this.removePortfolio}
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
  ReactDOM.render(<ProjectEdit />, document.getElementById('dataContainer'))
})
