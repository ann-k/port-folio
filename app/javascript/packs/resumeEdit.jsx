import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Pdf from 'react-to-pdf'

import PreviewContainer from '../components/3_Organisms/PreviewContainer'
import ConstructorContainer from '../components/3_Organisms/ConstructorContainer'

export default class ResumeEdit extends React.Component {
  constructor(props) {
    super(props)
    this.exportPDFRef = React.createRef()

    const resume = JSON.parse(document.getElementById('dataContainer').dataset.resume)
    const content = JSON.parse(document.getElementById('dataContainer').dataset.contents)

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

    const url = document.getElementById('dataContainer').dataset.url_for_resume
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

  exportPDFButton() {
    return (
      <Pdf targetRef={this.exportPDFRef} filename='cv.pdf'>
        {({ toPdf }) => {
          return (
            <button className='button button-big button-icon-and-words'
                    onClick={(event) => {
                        event.preventDefault()
                        toPdf()
            }}>
              <img src={IconDownload} />
              <h3>Сохранить в PDF</h3>
            </button>
          )
        }}
      </Pdf>
    )
  }

  render() {
    return (
      <>
        <PreviewContainer resume={this.state.resume}
                          exportPDFRef={this.exportPDFRef} />
        <ConstructorContainer resume={this.state.resume}
                              handleInputChange={this.handleInputChange}
                              content={this.state.content}
                              panelExportState={this.state.panelExportDisabled}
                              handlePanelExportDisplayChange={this.handlePanelExportDisplayChange}
                              exportPDFRef={this.exportPDFRef} />
      </>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<ResumeEdit />, document.getElementById('dataContainer'))
})
