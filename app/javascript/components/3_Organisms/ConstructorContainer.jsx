import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import BarConstructorWrapper from '../2_Molecules/BarConstructorWrapper'
import BarExportWrapper from '../2_Molecules/BarExportWrapper'
import PanelExport from '../2_Molecules/PanelExport'
import ConstructorSettings from '../3_Organisms/ConstructorSettings'
import ConstructorDecoration from '../3_Organisms/ConstructorDecoration'

export default class ConstructorContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleTabChange = this.handleTabChange.bind(this)

    this.state = {
      settingsTabDisabled: false,
      decorationTabDisabled: true,
    }
  }

  handleTabChange(event) {
    this.setState(prevState => ({
      ...this.state,
      settingsTabDisabled: !prevState.settingsTabDisabled,
      decorationTabDisabled: !prevState.decorationTabDisabled,
    }))
  }

  render() {
    return (
      <div className='constructor-container'>
        <BarConstructorWrapper settingsTabDisabled={this.state.settingsTabDisabled}
                               decorationTabDisabled={this.state.decorationTabDisabled}
                               onTabChange={this.handleTabChange} />

        <ConstructorSettings portfolio={this.props.portfolio}
                             portfolios={this.props.portfolios}
                             project={this.props.project}
                             projects={this.props.projects}
                             resume={this.props.resume}
                             tabList={this.props.tabList}
                             tabListOrder={this.props.tabListOrder}
                             handleDragEnd={this.props.handleDragEnd}
                             removeProject={this.props.removeProject}
                             removePortfolio={this.props.removePortfolio}
                             disabled={this.state.settingsTabDisabled}
                             handleInputChange={this.props.handleInputChange}
                             handlePanelAddObjectsDisplayChange={this.props.handlePanelAddObjectsDisplayChange} />

        <ConstructorDecoration disabled={this.state.decorationTabDisabled} />

        <BarExportWrapper onPanelExportDisplayChange={this.props.handlePanelExportDisplayChange} />

        <PanelExport content={this.props.content}
                     disabled={this.props.panelExportState}
                     onPanelExportDisplayChange={this.props.handlePanelExportDisplayChange} />
      </div>
    )
  }
}