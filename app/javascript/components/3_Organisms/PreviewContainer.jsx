import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Status from '../2_Molecules/Status'
import PanelAddObjects from '../2_Molecules/PanelAddObjects'
import BarPreviewWrapper from '../2_Molecules/BarPreviewWrapper'
import ContentsContainer from '../3_Organisms/ContentsContainer'

export default class PreviewContainer extends React.Component {
  render() {
    return (
      <div className='preview-container'>
        <Status portfolio={this.props.portfolio}
                project={this.props.project}
                resume={this.props.resume} />

        <ContentsContainer portfolio={this.props.portfolio}
                           project={this.props.project}
                           resume={this.props.resume}
                           projects={this.props.projects} />

        <BarPreviewWrapper />

        <PanelAddObjects projectsToAdd={this.props.projectsToAdd}
                         addProject={this.props.addProject}
                         portfoliosToAdd={this.props.portfoliosToAdd}
                         addPortfolio={this.props.addPortfolio}
                         disabled={this.props.panelAddObjectsState}
                         onPanelAddObjectsDisplayChange={this.props.handlePanelAddObjectsDisplayChange} />
      </div>
    )
  }
}
