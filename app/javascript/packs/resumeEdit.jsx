import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import PreviewContainer from '../components/3_Organisms/PreviewContainer'
import ConstructorContainer from '../components/3_Organisms/ConstructorContainer'

export default class ResumeEdit extends React.Component {
  constructor(props) {
    super(props)
    const resume = JSON.parse(document.getElementById('dataContainerResume').dataset.resume)
    const content = JSON.parse(document.getElementById('dataContainerResume').dataset.contents)

    this.state = {
      resume: resume,
      content: content,
      panelExportDisabled: true,
      panelAddObjectsDisabled: true,
    }

    this.handlePanelExportDisplayChange = this.handlePanelExportDisplayChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handlePanelExportDisplayChange(event) {
    this.setState(prevState => ({
      ...this.state,
      panelExportDisabled: !prevState.panelExportDisabled
    }))
  }

  handleInputChange(event) {
    const value = event.target.value
    const name = event.target.name

    this.setState({
      ...this.state,
      resume: {
        ...this.state.resume,
        [name]: value
      }
    })

    const url = document.getElementById('dataContainerResume').dataset.url_for_resume
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
        <PreviewContainer resume={this.state.resume} />
        <ConstructorContainer resume={this.state.resume}
                              handleInputChange={this.handleInputChange}
                              content={this.state.content}
                              panelExportState={this.state.panelExportDisabled}
                              handlePanelExportDisplayChange={this.handlePanelExportDisplayChange} />
      </>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<ResumeEdit />, document.getElementById('dataContainerResume'))
})
