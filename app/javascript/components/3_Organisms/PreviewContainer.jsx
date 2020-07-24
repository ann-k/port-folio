import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Status from '../2_Molecules/Status'
import PanelAddObjects from '../2_Molecules/PanelAddObjects'
import BarPreviewWrapper from '../2_Molecules/BarPreviewWrapper'
import ContentsContainer from '../3_Organisms/ContentsContainer'

export default class PreviewContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleTabChange = this.handleTabChange.bind(this)

    this.state = {
      tabActive: 'desktop'
    }
  }

  handleTabChange(event) {
    const tabName = event.currentTarget.id
    this.setState({tabActive: tabName})
  }

  render() {
    return (
      <div className='preview-container'>
        <Status portfolio={this.props.portfolio}
                project={this.props.project}
                resume={this.props.resume} />

        <ContentsContainer portfolio={this.props.portfolio}
                           project={this.props.project}
                           resume={this.props.resume}
                           projects={this.props.projects}
                           tabActive={this.state.tabActive}
                           exportPDFRef={this.props.exportPDFRef} />

        <BarPreviewWrapper onTabChange={this.handleTabChange}
                          tabActive={this.state.tabActive} />

        <PanelAddObjects projectsToAdd={this.props.projectsToAdd}
                         addProject={this.props.addProject}
                         portfoliosToAdd={this.props.portfoliosToAdd}
                         addToPortfolio={this.props.addToPortfolio}
                         disabled={this.props.panelAddObjectsState}
                         onPanelAddObjectsDisplayChange={this.props.handlePanelAddObjectsDisplayChange} />
      </div>
    )
  }
}
