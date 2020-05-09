import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import PreviewContainer from '../components/3_Organisms/PreviewContainer'
import ConstructorContainer from '../components/3_Organisms/ConstructorContainer'

export default class PortfolioEdit extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handlePanelExportDisplayChange = this.handlePanelExportDisplayChange.bind(this)
    this.handlePanelAddProjectsDisplayChange = this.handlePanelAddProjectsDisplayChange.bind(this)

    const portfolio = JSON.parse(document.getElementById('dataContainer').dataset.portfolio)

    this.state = {
      portfolio: portfolio,
      panelExportDisabled: true,
      panelAddProjectsDisabled: true,
    }
  }

  handlePanelExportDisplayChange(event) {
    this.setState(prevState => ({
      ...this.state,
      panelExportDisabled: !prevState.panelExportDisabled
    }))
  }

  handlePanelAddProjectsDisplayChange(event) {
    this.setState(prevState => ({
      ...this.state,
      panelAddProjectsDisabled: !prevState.panelAddProjectsDisabled
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

  render() {
    return (
      <>
        <PreviewContainer portfolio={this.state.portfolio}
                          panelAddProjectsState={this.state.panelAddProjectsDisabled}
                          handlePanelAddProjectsDisplayChange={this.handlePanelAddProjectsDisplayChange} />
        <ConstructorContainer portfolio={this.state.portfolio}
                              handleInputChange={this.handleInputChange}
                              panelExportState={this.state.panelExportDisabled}
                              handlePanelExportDisplayChange={this.handlePanelExportDisplayChange}
                              handlePanelAddProjectsDisplayChange={this.handlePanelAddProjectsDisplayChange} />
      </>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<PortfolioEdit />, document.getElementById('dataContainer'))
})
