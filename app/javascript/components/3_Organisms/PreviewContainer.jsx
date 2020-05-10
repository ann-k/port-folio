import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Status from '../2_Molecules/Status'
import PanelAddProjects from '../2_Molecules/PanelAddProjects'
import BarPreviewWrapper from '../2_Molecules/BarPreviewWrapper'
import ContentsContainer from '../3_Organisms/ContentsContainer'

export default class PreviewContainer extends React.Component {
  render() {
    return (
      <div className='preview-container'>
        <Status portfolio={this.props.portfolio} />

        <ContentsContainer projects={this.props.projects} />

        <BarPreviewWrapper />

        <PanelAddProjects projectsToAdd={this.props.projectsToAdd}
                          addProject={this.props.addProject}
                          disabled={this.props.panelAddProjectsState}
                          onPanelAddProjectsDisplayChange={this.props.handlePanelAddProjectsDisplayChange} />
      </div>
    )
  }
}
