import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import BarConstructorWrapper from '../2_Molecules/BarConstructorWrapper'
import BarExportWrapper from '../2_Molecules/BarExportWrapper'
import PanelExport from '../2_Molecules/PanelExport'
import ConstructorSettings from '../3_Organisms/ConstructorSettings'
import ConstructorDecoration from '../3_Organisms/ConstructorDecoration'

export default class ConstructorContainer extends React.Component {
  render() {
    return (
      <div className='constructor-container'>
        <BarConstructorWrapper />

        <ConstructorSettings portfolio={this.props.portfolio}
                             handleNameChange={this.props.handleNameChange}
                             handleDescriptionChange={this.props.handleDescriptionChange} />
        <ConstructorDecoration />

        <BarExportWrapper />

        <PanelExport />
      </div>
    )
  }
}
