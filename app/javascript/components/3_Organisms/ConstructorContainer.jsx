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
      tabActive: 'settings',
    }
  }

  handleTabChange(event) {
    const tabName = event.currentTarget.id
    this.setState({tabActive: tabName})
  }

  render() {
    return (
      <div className='constructor-container'>
        <BarConstructorWrapper tabActive={this.state.tabActive}
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
                             tabActive={this.state.tabActive}
                             handleInputChange={this.props.handleInputChange}
                             handlePanelAddObjectsDisplayChange={this.props.handlePanelAddObjectsDisplayChange} />

        <ConstructorDecoration tabActive={this.state.tabActive} />

        <BarExportWrapper onPanelExportDisplayChange={this.props.handlePanelExportDisplayChange} />

        <PanelExport content={this.props.content}
                     disabled={this.props.panelExportState}
                     onPanelExportDisplayChange={this.props.handlePanelExportDisplayChange}
                     portfolio={this.props.portfolio}
                     project={this.props.project}
                     resume={this.props.resume}
                     exportPDFRef={this.props.exportPDFRef} />
      </div>
    )
  }
}
